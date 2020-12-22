import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProjectCard.css'

class ProjectCard extends Component {


  handleButtonClick = () => {
    window.location = `/project/${this.props.id}`
  }

  render() {
    const { id, project_name, last_updated } = this.props;

    return (
      <div className='projectcard' id={`${id}`}>
        <div className='left-panel'>
        <h3>{project_name}</h3>
        <p>{`last updated: ${last_updated}`}</p>
        </div>
        <div className='right-panel'>
        <button 
        className='button button-link'
        type='button'
        onClick={this.handleButtonClick}>See More</button>
        </div>
      </div>
    );
  }

}

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  project_name: PropTypes.string.isRequired,
  user_id: PropTypes.number.isRequired,
  last_updated: PropTypes.string.isRequired,
  // modified: PropTypes.string.isRequired
};

export default ProjectCard;