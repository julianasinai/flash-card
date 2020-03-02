import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import ResultsList from './ResultsList';

const styles = {
  root: {
    padding: 0,
    margin: 0,
    height: '100vh'
  }
}

class Results extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <Navbar />
        <ResultsList />
      </div>
    );
  }
}

export default withStyles(styles)(Results);
