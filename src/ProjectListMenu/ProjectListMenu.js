import React, { Component } from 'react';
import config from '../config';
import TokenService from '../services/TokenService';
import './ProjectListMenu.css'
//import { Link } from 'react-router-dom';

class ProjectList extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const { name } = e.target;
    const url = config.API_ENDPOINT;
    const tempId = TokenService.getUserId();
    console.log(tempId);
    const newProject = {
      user_id: tempId,
      project_name: name.value
    }

    fetch(`${url}/project`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProject)
    })
    .then(res => {
      if(!res.ok) {
        console.log(res)
        return res.json().then(er => {throw er})
      }
        
      return res.json();
    })
    .then( res => {
      if(res.error){
        console.log('this shouldnt reach this line right');
      }
      console.log('YAY I THINK WE DID IT, the added project is: ', res);
      this.props.handleNewProject(res);
      //window.location('/project-list');
    })
    .catch( er => {
      console.log('THE ERROR IS: ', er)
    })
  }


  render() {
    return (
      <div className='projectlistmenu-container'>
        <form className='projectlist-form' onSubmit={this.handleSubmit}>
          <div className='input-fields'>
          <div className='form-field'>
            <label htmlFor='create-project'>New Project:</label>
            <input name='name' type='text' placeholder='MyProject' id='create-project' required />
          </div>
          </div>
          <button type='submit' className='button button-link'>Create</button>
          

        </form>
      </div>
    );
  }

}

export default ProjectList;