import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

class LandingPage extends Component {


  render() {
    return (<div id='landing-page'>
      <div className='landingpage-contents'>
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
      </div>

      <div id='about' className='reg-div'>
        <div className='spacing-div'></div>
        <div className='inner-spaccing-div'>
          <p>Daily Thoughts is your tool for getting through writer's block, keeping track of your thoughts and ideas, and so much more.</p>
          <p>Get started right away to start documenting your process of creation</p>
          <p>{'Want to give it a try? Log in with this demo account:\nnickname: BobbyJoe   password: MY123!@#'}</p>
        </div>
        <div className='spacing-div'></div>
      </div>
      </div>
    </div>);
  }
}

export default LandingPage;