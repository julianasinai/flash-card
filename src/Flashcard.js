import React, { Component } from 'react';
import { choice } from './Hiragana';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    height: '350px',
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  question: {

  },
  title: {
    fontSize: '4.5em',
    fontWeight: 'bold'
  },
  answer: {
    display: 'flex',
    flexDirection: 'column'
  }, 
  button: {
    marginTop: '10px'
  }
}

class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswered: false,
      question: choice(),
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({answer: evt.target.value});
  }
  handleSubmit(evt) {
    evt.preventDefault();

    if(this.state.isAnswered) { //next quetion
      this.setState({question: choice(), answer: ''});
    } else {
      if(this.state.question.ro === this.state.answer) { //validate answer
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
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent className={classes.question}>
          <Typography className={classes.title}>{this.state.question.char}</Typography>
        </CardContent>
        <CardActions>
          <form  className={classes.answer} onSubmit={this.handleSubmit}>
              <TextField
                id='answer'
                variant='outlined'
                value={this.state.answer}
                onChange={this.handleChange}
                label='Answer'
              /> 
              <Button
                type='submit'
                color='primary'
                variant='contained'
                className={classes.button}
              >
                {this.state.isAnswered ? 'Next' : 'Submit'}
              </Button>
          </form>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Flashcard);