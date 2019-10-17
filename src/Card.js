import React, { Component } from 'react';
import {choice} from './Hiragana';
import Character from './Character';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {isAnswered: false, quest: choice(), answer: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({answer: evt.target.value});
  }
  handleSubmit(evt) {
    evt.preventDefault();

    if(this.state.isAnswered) { //next quetion
      this.setState({quest: choice(), answer: ''});
    } else {
      if(this.state.quest.ro === this.state.answer) { //validate answer
        alert('ok');

      }else{
        alert('not ok');
      }
    }

    this.setState(st => ({
      isAnswered: !st.isAnswered
    }));
  }
  render() {
    return (
      <div className='Card'>
        <Character char={this.state.quest.char} />
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            placeholder={this.state.done ? this.state.quest.char : 'answer'}
            value={this.state.answer}
            onChange={this.handleChange} 
          />
          <button id='Card-button'>{this.state.isAnswered ? 'Next' : 'Submit'}</button>  
        </form>
      </div>
    );
  }
}

export default Card;