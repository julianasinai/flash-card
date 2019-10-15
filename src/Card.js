import React, { Component } from 'react';
import {choice} from './Hiragana';
import Character from './Character';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {quest_char: choice(), answer: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({answer: evt.target.value});
  }
  handleSubmit(evt) {
    evt.preventDefault();
    if(this.state.quest_char.ro === this.state.answer) {
      alert('ok');
    }else{
      alert('not ok');
    }
  }
  render() {
    return (
      <div>
        <Character char={this.state.quest_char.char} />
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            placeholder='answer'
            value={this.state.answer}
            onChange={this.handleChange} 
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Card;