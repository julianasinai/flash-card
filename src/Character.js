import React, { Component } from 'react';
import './Character.css'

class Character extends Component {
  render() {
    return <div className='Character'>{this.props.char}</div>
  }
}

export default Character;