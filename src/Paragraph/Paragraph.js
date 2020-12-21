import React, {Component} from 'react'

import './Paragraph.css'

class Paragraph extends Component {
  render() {
    const paragraph = this.props.sentences.map(sentence => sentence.content).join(' ');

    return (
      <div className='paragraph-container'>
        {paragraph}
      </div>
    )
  }
}

export default Paragraph;