import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import ProjectSelector from "./ProjectSelector";
import { Card, CardContent, Avatar, Container } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    backgroundSize: "cover",
    display: "inline-block",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
  },
  square: {
    padding: "20px",
  },
  profileContainer: {
    marginTop: "20px"
  },
});
const projects = [
  {
    title: "Mapper",
    content: "A map building application using the google maps API. Allows users to create maps with pinned locations, descriptions and images of locations anywhere.",
    github: "https://github.com/jlangy/mapper",
    pictures: ["url(mapper1.png)", "url(mapper1.png)"],
    tags: ["express", "ejs", "jquery", "node", "javascript"],
  },
  {
    title: "dog",
    content: "content two",
    github: "githuburl",
    pictures: ["url(dog.jpeg)", "url(dog2.jpeg)", "url(dog3.jpeg)"],
    tags: ["js", "node", "express"],
  },
  {
    title: "elf",
    content: "content 3",
    github: "githuburl",
    pictures: ["url(dog.jpeg)", "url(dog2.jpeg)", "url(dog3.jpeg)"],
    tags: ["python", "node", "express"],
  },
  {
    title: "pig",
    content: "content 4",
    github: "githuburl",
    pictures: ["url(dog.jpeg)", "url(dog2.jpeg)", "url(dog3.jpeg)"],
    tags: ["js", "node"],
  },
];

const tags = {
  js: true,
  node: true,
  express: true,
  HTML: true,
  ruby: true,
  python: true,
  rails: true,
};

function ProjectsGrid() {
  const classes = useStyles();
  const [activeTags, setActiveTags] = useState(tags);
  const [activeProjects, setActiveProjects] = useState(projects);

  const filterTags = (tag) => {
    if (activeTags[tag]) {
      const newTags = { ...activeTags };
      newTags[tag] = false;
      setActiveTags(newTags);
      filterProjects(newTags);
    } else {
      const newTags = { ...activeTags };
      newTags[tag] = true;
      setActiveTags(newTags);
      filterProjects(newTags);
    }
  };

  const filterProjects = (tags) => {
    const activeProjects = projects.filter((project) =>
      project.tags.some((tag) => tags[tag])
    );
    setActiveProjects(activeProjects);
  };

  return (
    <Container className={classes.profileContainer} >
      <Card >
        <ProjectSelector activeTags={activeTags} filterTags={filterTags} />
        <div className={classes.grid}>
          {Object.values(activeProjects).map((project, i) => (
            <div className={classes.square} key={i}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Card>
    </Container>
  );
}

export default ProjectsGrid;
