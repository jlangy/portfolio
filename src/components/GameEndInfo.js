import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    padding: '10px'
  }
});

function GameEndInfo(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ul>
        <li>WPM: {Math.round(props.successfulWords * 60000 / (Date.now() - props.time))}</li>
        <li>Mistakes: {props.errors}</li>
        <li>Words: {props.successfulWords}</li>
      </ul>
      <button onClick={props.setOpen}>Close</button>
      <button onClick={props.restart}>Play Again</button>
    </div>
  )
}

export default GameEndInfo;
