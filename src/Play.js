import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar'
import Flashcard from './Flashcard';

const styles = {
  root: {
    padding: 0,
    margin: 0,
    height: '100vh'
  }
}

class Play extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <Navbar />
        <Flashcard />
      </div>
    );
  }
}

export default withStyles(styles)(Play);