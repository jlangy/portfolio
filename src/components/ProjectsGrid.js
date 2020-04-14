import React, {usState} from 'react';
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
const projects = [{title: 'spider', content: 'content one', github: 'githuburl', pictures: ['url(dog.jpeg)', 'url(dog2.jpeg)', 'url(dog3.jpeg)'],tags: ['ruby', 'rails', 'HTML']},
{title: 'dog', content: 'content two', github: 'githuburl', pictures: ['url(dog.jpeg)', 'url(dog2.jpeg)', 'url(dog3.jpeg)'],tags: ['js', 'node', 'express']},
{title: 'elf', content: 'content 3', github: 'githuburl', pictures: ['url(dog.jpeg)', 'url(dog2.jpeg)', 'url(dog3.jpeg)'], tags: ['python', 'node', 'express']},
{title: 'pig', content: 'content 4', github: 'githuburl', pictures: ['url(dog.jpeg)', 'url(dog2.jpeg)', 'url(dog3.jpeg)'],tags: ['js', 'node']}];

const tags = ['js','node','express','python','rails','ruby','HTML']
function ProjectsGrid() {
  const [activeTags, setActiveTags] = useState(tags)
  const classes = useStyles();
  return (
    <>
      <ProjectSelector activeTags={activeTags} tags={tags}/>
      <div className={classes.grid}>
        {Object.values(projects).map((project, i) => <div className={classes.square}><ProjectCard project={project}/></div>)}
      </div>
    </>
  )
}

export default ProjectsGrid;
