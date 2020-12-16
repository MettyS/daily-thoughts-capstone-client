import React, { Component } from 'react';
import TokenService from '../services/TokenService';
import { NavLink } from 'react-router-dom';

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
        <NavLink to='/project-list'><li className='nav-link'>Projects</li></NavLink>
        {/*<NavLink to='/project'><li className='nav-link'></li></NavLink>*/}
        <NavLink to='/' onClick={this.handleLogout}><li className='nav-link'>Logout</li></NavLink>
      </ul>
    </nav>
    </div>
    );
  }
}

export default NavBar;