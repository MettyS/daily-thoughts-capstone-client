import React, { Component } from 'react';
import './SentenceList.css'

import SentenceCard from '../SentenceCard/SentenceCard';

class SentenceList extends Component {
  state = {
    sentences: []
  }
  render() {
    let keyNum = 0;
    const items = this.props.sentences ? this.props.sentences.map(sentence => {
      keyNum++;
      return (
        <SentenceCard content={sentence.content} key={keyNum} />
      )
    })
    : '' ;

    return (
      <div className='sentencelist-container'>
        {this.props.loading ? 'Loading Sentences..' : items}
      </div>
    )
  }
}

export default SentenceList