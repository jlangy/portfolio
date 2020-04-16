import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tag: {
    border: '1px solid black',
    padding: '15px',
    borderRadius: '60px',
    width: '100px',
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '10px 25px',
    cursor: 'pointer'
  },
  active: {
    background: 'green'
  },
  inactive: {
    background: 'red',
    boxShadow: '2px 2px black',
    position: 'relative',
    bottom: '2px',
    right: '2px'
  },
});

function Tag(props) {
  const classes = useStyles();
  console.log(typeof classes.tag)

  return (
    <div className={classes.tag + " " + (props.active ? classes.active : classes.inactive)} onClick={() => props.filterTags(props.tagName)}>
      {props.tagName}
    </div>
  )
}

export default Tag;
