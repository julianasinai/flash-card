import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { HIRAGANA } from './Hiragana';

const styles = {
  columns: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  column: {
    padding: '10px'
  },
  list: {
    boxSizing: 'border-box',
    width: '240px',
    cursor: 'pointer',
    lineHeight: '1.1',
    textAlign: 'center',
    '& > div': {
      boxSizing: 'border-box',
      width: '40px',
      height: '40px',
      paddingTop: '2px',
      display: 'inline-block',
      border: '1px solid black',//delete later
      borderRadius: '1.5px'
    }
  },
  char: {
    fontSize: '20px',
    fontWeight: 'bold',

  },
  ro: {
    fontSize: '12px',
    fontWeight: 'normal',

  }
}
//Need to fix the position of characters
class ResultsList extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.columns}>
        <div className={classes.column}>
          <Typography variant="h5" gutterBottom align='center'>Hiragana</Typography>
          <div className={classes.list}>
            {HIRAGANA.map(hiragana => {
              return(
                <div>
                  <div className={classes.char}>{hiragana.char}</div>
                  <div className={classes.ro}>{hiragana.ro}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={classes.column}>
          <Typography variant="h5" gutterBottom align='center'>Katakana</Typography>
          <div className={classes.list}>
            {HIRAGANA.map(hiragana => {
              return(
                <div>
                  <div className={classes.char}>{hiragana.char}</div>
                  <div className={classes.ro}>{hiragana.ro}</div>
                </div>
              )
            })}
          </div>     
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ResultsList);