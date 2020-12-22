import React, { Component } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectListMenu from '../ProjectListMenu/ProjectListMenu';
import TokenService from '../services/TokenService'
import config from '../config'

import './ProjectList.css'

class ProjectList extends Component {

  state = {
    loading: true,
    error: null,
    filter: null,
    projects: []
  }

  componentDidMount = () => {
    const url = config.API_ENDPOINT;
    fetch(`${url}/project`)
    .then( res => res.json())
    .then( projects => {
      console.log('got the projects!!! >> ', projects);
      const ourProjects = projects.filter(project => {return project.user_id === parseInt(TokenService.getUserId(),10)})
      this.setState({
        loading: false,
        projects: ourProjects
      });
    })
    .catch( er => {
      console.log('error in getting projects: ',er);
    })
  }

  handleNewProject = (project) => {
    console.log('the project you are trying to add to the state is: ', project);
    let tempprojects = this.state.projects;
    tempprojects.push(project);
    this.setState({
      projects: tempprojects
    })
  }
  

  render() {

    // id: PropTypes.number.isRequired,
    // project_name: PropTypes.string.isRequired,
    // user_id: PropTypes.number.isRequired,
    // last_updated: PropTypes.string.isRequired,
    console.log('projects are currently: ', this.state.projects);
    let keyNum = 0;
    const items = this.state.projects.map((project) => {
        keyNum++;
        return (
          <ProjectCard 
          id={project.id} 
          project_name={project.project_name}
          user_id={project.user_id}
          last_updated={project.last_updated}
          key={keyNum}
          />
        )
      })

    return (
      <div className='projectlist-container'>
        <ProjectListMenu handleNewProject={(project) => this.handleNewProject(project)}/>
        {
          this.state.loading ? (<p>Loading...</p>)
          : ( items )
        }
      </div>
    );
  }

}

export default ProjectList;