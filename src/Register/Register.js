import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService'
import TokenService from '../services/TokenService';

class Register extends Component {
  state = {
    nickname: { value: '', touched: false },
    password: { value: '', touched: false },
    repeatPassword: { value: '', touched: false},
    email: { value: '', touched: false},
    submitError: null
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nickname, password, email } = e.target;
    
    //reset submit errors:
    this.setState({ submitError: null})
    console.log(nickname, password, email);

    if(!this.validForm()){
      this.setState({ 
        submitError: <p className='error-message'>Please fix fields before submission</p>
      })
    }
    else {
      AuthService.postUser({
        nickname: nickname.value,
        password: password.value,
        email: email.value
      })
      .then( res => {
        if(res.error){
          throw res;
        }
        if(!res.ok){
          console.log('SPOOKY >>>>>>>>>>>>', res);
        }
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.id);
        window.location = '/'
      })
      .catch(res => {
        console.log('error: ', res);
        this.setState({
        submitError: `${res.error.message}`
        })
      })
    }
    
    
  };

  validForm = () => {
    const messages = this.compileFormErrors(); 

    for (const key in messages) {
      if(messages[key] && messages[key] !== '' && key !== 'submitMessage'){
        return false;
      }
    }
    return true;
  }

  //minimum 5 characters, no special chars, no initial/trailing space validation
  validateNickname = (nick) => {
    const restriction1 = /\W/  //[!@#$%&*()_+=|<>?{}\[\]~-]/;
    const restriction2 = /\s/

    let problems = nick.length < 5 ? 'Nickname must be at least 5 characters. ' : '';
    problems += nick.match(restriction1) || nick.match(restriction2) ? '\nNickname cannot contain special characters or spaces. ' : '' ;

    return problems === '' ? null : (
    <p className='error-message'>{problems}</p>
    );
  };

  //at least 8 chars, at least one alpha and a special character validation
  validatePass = (pass) => {
    const patty = /[!@#$%&*()_+=|<>?{}[\]~-]/;
    const specialExists = pass.match(patty);

    const pat = /[A-Z]/;
    const capitalExists = pass.match(pat);

    let problems = pass.length < 8 ? 'Password must be at least 8 characters. ' : '';
    problems += specialExists && capitalExists ? '': '\nPassword must have at least 1 capital and 1 special character. ';

    return problems === '' ? null : (
    <p className='error-message'>{problems}</p>
    )
  }

  validatePasswordMatch = (pass, repeatPass) => {
    return pass === repeatPass ? null : (
      <p className='error-message'>Passwords must match. </p>
      );
  }

  validateEmail = (email) => {
    const restrictions = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!restrictions.test(email))
      return 'Invalid email';
    return restrictions.test(email) ? null : (
      <p className='error-message'>Must be a valid email address. </p>
      );
  }

  compileFormErrors = () => {
    let errMessages = {
      nicknameMessage: null,
      passwordMessage: null,
      passwordMatchMessage: null,
      emailMessage: null,
      submitMessage: null
    };

    if(this.state.nickname.touched) {
      const message = this.validateNickname(this.state.nickname.value);
      errMessages.nicknameMessage = message;
    }
    if(this.state.password.touched) {
      const message = this.validatePass(this.state.password.value);
      errMessages.passwordMessage = message;
    }
    if(this.state.repeatPassword.touched) {
      const message = this.validatePasswordMatch(this.state.password.value, this.state.repeatPassword.value)
      errMessages.passwordMatchMessage = message;
    }
    if(this.state.email.touched) {
      const message = this.validateEmail(this.state.email.value);
      errMessages.emailMessage = message;
    }
    if(this.state.submitError) {
      errMessages.submitMessage = (
      <p className='error-message'>{this.state.submitError}</p>
      )
    }

    return errMessages;
  }


  render() {


    const {
      nicknameMessage, passwordMessage, passwordMatchMessage,
      emailMessage, submitMessage
    } = this.compileFormErrors(); 

    return (
      <div id='register-container'>
      <Link to='/' className='button-link'>
            Go back
      </Link>
      <form className='register-form' onSubmit={this.handleSubmit}>
        {submitMessage}
        <div className='form-field'>
          <label htmlFor='register-nickname'>Nickname</label>
          <input name='nickname' type='text' placeholder='BobbyJoe' id='register-nickname' onChange={e => this.setState({nickname: {value: e.target.value, touched: true} })} required />
          {nicknameMessage}
        </div>

        <div className='form-field'>
          <label htmlFor='register-email'>Email</label>
          <input name='email' type='text' placeholder='BobbyJoe@gmail.com' id='register-email' onChange={e => this.setState({email: {value: e.target.value, touched: true} })} required />
          {emailMessage}
        </div>

        <div className='form-field'>
          <label htmlFor='register-password'>Password</label>
          <input name='password' type='text' id='register-password' onChange={e => this.setState({password: {value: e.target.value, touched: true} })} required />
          {passwordMessage}
        </div>

        <div className='form-field'>
          <label htmlFor='register-repeat-password'>Repeat Password</label>
          <input name='repeat-password' type='text' id='register-repeat-password' onChange={e => this.setState({repeatPassword: {value: e.target.value, touched: true} })} required />
          {passwordMatchMessage}
        </div>

        <div className='form-field'>
          <button type='submit' className='button'>Register</button>
          <Link to='/login' className='button-link'>
            Already have an account?
          </Link>
        </div>
      </form>
      </div>
    )
  }
}

export default Register;