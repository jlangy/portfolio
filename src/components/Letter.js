import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  green: {
    color: 'green'
  },
  hidden: {
    visibility: 'hidden'
  }
});
function Letter(props) {
  const classes = useStyles();

  const green = props.letterIndex <= props.index ? '' : classes.green;
  const hidden = props.visibleLetterIndex <= props.index ? '': classes.hidden;
  const appliedClasses = `${green} ${hidden}`

  return (
    <span className={appliedClasses}>
      {props.letter}
    </span>
  )
}

export default Letter;
