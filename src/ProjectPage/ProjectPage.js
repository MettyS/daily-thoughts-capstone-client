import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar'
import SentenceList from '../SentenceList/SentenceList';
import Paragraph from '../Paragraph/Paragraph';
import SentenceForm from '../SentenceForm/SentenceForm';

import TokenService from '../services/TokenService'
import config from '../config'

import './ProjectPage.css'

class ProjectPage extends Component {

  state = {
    loadingpage: true,
    loading: true,
    error: null,
    sentences: [],
    projectId: (this.props.match ? this.props.match.params : -1)
  }

  componentDidMount = () => {
    console.log('do they have a token? ', TokenService.hasAuthToken());
    console.log('the token is, ',TokenService.getAuthToken());
    if(!TokenService.hasAuthToken()) {
      window.location = '/';
      return;
    }
    this.setState({
      loadingpage: false
    })

    const url = config.API_ENDPOINT;
    const user_id = TokenService.getUserId();
    const { projectId } = this.state.projectId;
    fetch(`${url}/project/${projectId}`)
    .then( res => res.json())
    .then( project => {
      if(!(project.user_id === parseInt(user_id))){
        console.log('youre not allowed to be here!!!, the user_id is: ', project.user_id);
        console.log('but your id is: ', user_id)
        window.location('/project-list');
        return;
      }

      fetch(`${url}/sentence`)
        .then( res => res.json())
        .then( sentences => {

          const ourSentences = sentences.filter(sen => {return sen.project_id === parseInt(projectId)})
          console.log('sentences for this project are: ', ourSentences)
          this.setState({
            loading: false,
            sentences: ourSentences
          });
        })
        .catch( er => {
          console.log('error in getting sentences: ',er);
        })  

    })
    .catch(er => {
      console.log(er);
    })

  }

  handleNewSentence = (sentence) => {
    let tempSentences = this.state.sentences
    tempSentences.push(sentence)
    this.setState({
      sentences: tempSentences
    })
  }
  

  render() {

    // id: PropTypes.number.isRequired,
    // project_name: PropTypes.string.isRequired,
    // user_id: PropTypes.number.isRequired,
    // last_updated: PropTypes.string.isRequired,
    console.log('sentences are currently: ', this.state.sentences);
    
    

    return (
      <div className='projectpage-container'>
        <NavBar />
        <div className='project-contents'>
          <Paragraph sentences={this.state.sentences} />
          <SentenceList loading={this.state.loading} sentences={this.state.sentences} />
          <SentenceForm handleNewSentence={(sen) => {this.handleNewSentence(sen)}} projectId={this.state.projectId} />
        </div>
      </div>
    );
  }

}

export default ProjectPage;