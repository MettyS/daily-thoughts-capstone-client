import React, { Component } from 'react'
import './SentenceCard.css'

class SentenceCard extends Component {
  render() {
    return (
      <div className='sentencecard-container'>
        <p>
          {this.props.content}
        </p>
      </div>
    );
  }
}

export default SentenceCard;