import React, { Component } from 'react';
import { choice } from './Hiragana';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

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
    return (
      <Container>
        <Card>
          <CardContent>
            <Typography>{this.state.question.char}</Typography>
          </CardContent>
          <CardActions>
            <form onSubmit={this.handleSubmit}>
                <TextField
                  id='answer'
                  value={this.state.answer}
                  onChange={this.handleChange}
                  label='Answer'
                /> 
                <Button
                  type='submit'
                  color='primary'
                  variant='contained'
                >
                  {this.state.isAnswered ? 'Next' : 'Submit'}
                </Button>
            </form>
          </CardActions>
        </Card>
      </Container>
    );
  }
}

export default Flashcard;