import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Flashcard from './Flashcard';

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' render={() => <Flashcard />} />
        <Route exact path='/results' render={() => <h1>Results</h1>} />
      </Switch>
    );
  }
}

export default App;
