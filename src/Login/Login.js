import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import TokenService from '../services/TokenService';

class Login extends Component {
  state = {
    nickname: '',
    password: '',
    submitError: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {nickname, password} = e.target;
    console.log('submitting with, ',nickname.value, password.value);
    const loginBody = {
      nickname: nickname.value,
      password: password.value
    };
    AuthService.postLogin(loginBody)
    .then( res => {
      if(res.error){
        throw res;
      }

      console.log('login response:   ',res);
      TokenService.saveAuthToken(res.authToken)
      TokenService.saveUserId(res.userId)
      window.location = '/project-list';
    })
    .catch(er => {
      console.log('baderror: ', er);
      this.setState({
        submitError: `${er.error.message}`
      });
    })
  }

  getSubmitErrors() {
    if(this.state.submitError) {
      return (
      <p className='error-message'>{this.state.submitError}</p>
      )
    }
    return null;
  }

  render() {
    const submitError = this.getSubmitErrors();

    return (
    <div id='login-container'>
      <Link to='/' className='button-link'>
            Go back
      </Link>
      <form className='login-form' onSubmit={this.handleSubmit}>
        {submitError}
        <div className='input-fields'>
        <div className='form-field'>
          <label htmlFor='login-nickname'>Nickname</label>
          <input name='nickname' type='text' placeholder='BobbyJoe' id='login-nickname' onChange={e => this.setState({nickname: {value: e.target.value} })} />
        </div>

        <div className='form-field'>
          <label htmlFor='login-password'>Password</label>
          <input name='password' type='text' id='login-password' onChange={e => this.setState({password: {value: e.target.value} })} />
        </div>

        </div>

        <div className='form-field'>
          <button type='submit' className='button button-link'>Login</button>
          <Link to='/register' className='button-link'>
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
      
      )
  }


}

export default Login;