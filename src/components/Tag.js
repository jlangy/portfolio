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
    background: 'red'
  }
});

function Tag(props) {
  const classes = useStyles();

  return (
    <div className={classes.tag} style={{background: props.active ? 'red' : 'green'}} onClick={() => props.filterTags(props.tagName)}>
      {props.tagName}
    </div>
  )
}

export default Tag;
