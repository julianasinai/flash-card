import React, { Component } from 'react';
import Navbar from './Navbar';
import ResultsList from './ResultsList';

class Results extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <ResultsList />
      </div>
    );
  }
}

export default Results;
