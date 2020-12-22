import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ProjectListMenu from '../ProjectListMenu/ProjectListMenu';
import ProjectList from '../ProjectList/ProjectList';
import TokenService from '../services/TokenService';
import config from '../config';

class ProjectListPage extends Component {
  state = {
    loading: true,
    projects: []
  }

  componentDidMount() {
    console.log('do they have a token?', TokenService.hasAuthToken());
    console.log('the token is:',TokenService.getAuthToken());

    if(!TokenService.hasAuthToken()) {
      console.log('sending you back to a safe place');
      window.location = '/';
      return;
    }

  }



  render() {
    
    return (
      <div className='projectlistpage-container'>
        <NavBar />
        <ProjectList />
      </div>
    );
  }

}

export default ProjectListPage;