import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Play from './Play';
import './App.css'

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' render={() => <Play />} />
        <Route exact path='/results' render={() => <h1>Results</h1>} />
      </Switch>
    );
  }
}

export default App;
