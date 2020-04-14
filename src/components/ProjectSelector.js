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

const tags = {
  'js': true,
  'node': true,
  'express': true,
  'HTML': true,
  'ruby': true,
  'python': true,
  'rails': true
};


function ProjectSelector(props) {
  const [activeTags, setActiveTags] = useState(tags)

  const classes = useStyles();

  const filterTags = (tag) => {
    console.log(tag, activeTags[tag])
    if(activeTags[tag]){
      const newTags = {...activeTags};
      newTags[tag] = false;
      setActiveTags(newTags)
    }
    else {
      const newTags = {...activeTags};
      newTags[tag] = true;
      setActiveTags(newTags)
    }
  }

  return (
    <div className={classes.container}>
      <h2>Tags</h2>
      <div className={classes.tags}>
        {Object.entries(activeTags).map((tag, i) => <Tag tagName={tag[0]} active={tag[1]} key={i} filterTags={filterTags}/>)}
      </div>
    </div>
  )
}

export default ProjectSelector;
