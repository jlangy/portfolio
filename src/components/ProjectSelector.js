import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Tag from './Tag.js'

const useStyles = makeStyles({
  container: {
    color: 'black'
  },
  tags: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
});

function ProjectSelector(props) {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2>Tags</h2>
      <div className={classes.tags}>
        {Object.entries(props.activeTags).map((tag, i) => <Tag tagName={tag[0]} active={tag[1]} key={i} filterTags={props.filterTags}/>)}
      </div>
    </div>
  )
}

export default ProjectSelector;
