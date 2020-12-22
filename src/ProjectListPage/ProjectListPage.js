import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import ProjectList from '../ProjectList/ProjectList';
import TokenService from '../services/TokenService';

class ProjectListPage extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    console.log('do they have a token?', TokenService.hasAuthToken());
    console.log('the token is:',TokenService.getAuthToken());

    if(!TokenService.hasAuthToken()) {
      console.log('sending you back to a safe place');
      window.location = '/';
      return;
    }

    this.setState({
      loading: false
    })

  }



  render() {
    const pageContents = ( this.state.loading 
      ? <div className='projectlistpage-container'></div>
      : (<div className='projectlistpage-container'>
          <NavBar />
          <ProjectList />
        </div>)

    )
    
    return pageContents
  }

}

export default ProjectListPage;