import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {


  render() {
    return (<div id='landing-page'>
      <div id='title' className='reg-div'>
        <h1>Daily Thoughts</h1>
        <h3>Start writing right now!</h3>

        <div className='button-links'>
          <Link to='/register' className='button-link register-link'>
            New Account
          </Link>
          <Link to='/login' className='button-link login-link'>
            Login
          </Link>
        </div>
        {'Project title, background image, link to register/login form'}
      </div>

      <div id='about' className='reg-div'>
        {'description of website'}
      </div>
    </div>);
  }
}

export default LandingPage;