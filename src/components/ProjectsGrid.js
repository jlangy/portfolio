import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from './ProjectCard';

const useStyles = makeStyles({
  grid: {
    backgroundSize: 'cover',
    display: 'inline-block',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap'
  },
  square: {
    padding: '20px'
  }
});
// const props = [{title: '1', content: 'content', github: 'githuburl', pictures: []}];
const props = [1,2,3,4,5,6,7]

function ProjectsGrid() {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {Object.values(props).map((props, i) => <div className={classes.square}><ProjectCard /></div>)}
    </div>
  )
}

export default ProjectsGrid;
