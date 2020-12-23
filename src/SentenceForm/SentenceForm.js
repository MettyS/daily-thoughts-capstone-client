import React, { Component } from 'react'
import config from '../config'
import './SentenceForm.css'

class SentenceForm extends Component {
  state = {
    submitError: null
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { content } = e.target;
    const url = config.API_ENDPOINT;
    const { projectId } = this.props.projectId

    const newSentence = {
      project_id: projectId,
      content: content.value
    }

    fetch(`${url}/sentence`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newSentence)
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
      console.log('YAY I THINK WE DID IT, the added sentence is: ', res);
      this.props.handleNewSentence(res);
      document.getElementById('content'). value =''
      //window.location('/project-list');
    })
    .catch( er => {
      console.log('THE ERROR IS: ', er)
    })
  }

  render() {
    return (
      <div className='sentenceform-container'>
        <form className='sentence-form' onSubmit={this.handleSubmit}>
        
          <div className='form-field'>
            {/*<label htmlFor='content'>Note content:</label>*/}
            <textarea 
              name="content" 
              id="content" 
              placeholder="New sentence here!"
              required 
            />
          </div>

          <div className='form-field'>
          <button type='submit' className='button button-link'>Add Sentence</button>
          </div>

        </form>
      </div>
    )
  }
}

export default SentenceForm