import React, { Component } from 'react';
import Navbar from './Navbar'
import Flashcard from './Flashcard';

class Play extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Flashcard />
      </div>
    );
  }
}

export default Play;