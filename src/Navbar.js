import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: '1',
    backgroundColor: '#ECE9E0',
    color: '#69696C'
  },
  menuButton: {
    marginRight: '10px',
  },
  title: {
    flexGrow: '1',
  },
  link: {
    color: '#69696C',
    fontWeight: 'bold',
    textDecoration: 'none'
  }
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Flashcards
          </Typography>
          <Link to='/' className={classes.link}>
            <Button color="inherit">Play</Button>
          </Link>
          <Link to='/results' className={classes.link}>
            <Button color="inherit">Results</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);