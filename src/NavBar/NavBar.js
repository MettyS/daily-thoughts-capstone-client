import React, { Component } from 'react';
import TokenService from '../services/TokenService';
import { NavLink } from 'react-router-dom';

import './NavBar.css'

class NavBar extends Component {

  handleLogout() {
    TokenService.clearAuthToken();
    TokenService.getUserId = id => {};
    window.location = '/';
  }

  render() {
    return (
    <div className='navbar-container'>
    <nav>
      <ul className='nav-list'>
        <NavLink to='/project-list' className='nav-link'><li>Projects</li></NavLink>
        {/*<NavLink to='/project'><li className='nav-link'></li></NavLink>*/}
        <NavLink to='/' className='nav-link' onClick={this.handleLogout}><li>Logout</li></NavLink>
      </ul>
    </nav>
    </div>
    );
  }
}

export default NavBar;