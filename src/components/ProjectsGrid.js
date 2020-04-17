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
  title: {
    fontSize: '2em',
    textAlign: 'center'
  }
});
const projects = [
  {
    title: "Mapper",
    content: "A map building application using the google maps API. Allows users to create maps with pinned locations, descriptions and images of locations anywhere.",
    github: "https://github.com/jlangy/mapper",
    pictures: ["url(mapper1.png)", "url(mapper2.png)","url(mapper3.png)"],
    tags: ["express", "ejs", "jquery", "node", "javascript", 'postgres', 'sass'],
  },
  {
    title: "Scheduler",
    content: "A scheduling app for booking appointments. Built with websockets for automatic updates across connected users.",
    github: "https://github.com/jlangy/scheduler",
    pictures: ["url(scheduler1.png)", "url(scheduler2.png)"],
    tags: ["react", "node", "javascript"],
  },
  {
    title: "Traderu",
    content: "A stock trading game app to buy and sell stocks and cryptocurrencies with fake money and compete to make the most.",
    github: "https://github.com/bryce-mcmath/traderu",
    pictures: ["url(traderu1.png)", "url(traderu2.png)"],
    tags: ["vue", "express", "node", 'postgres', 'sass'],
  },
  {
    title: "Jungle",
    content: "A product sales platform to browse and buy different products. Includes administrator dashboard",
    github: "https://github.com/jlangy/jungle",
    pictures: ["url(jungle1.png)", "url(jungle2.png)", "url(jungle3.png)"],
    tags: ["ruby", "rails"],
  },
  {
    title: "tweeter",
    content: "A restyled twitter clone for posting short messages",
    github: "https://github.com/jlangy/tweeter",
    pictures: ["url(tweeter1.png)", "url(tweeter2.png)"],
    tags: ["sass", "jquery", 'javascript'],
  },
  {
    title: "battleship",
    content: "An online version of the classic battlehip game. Options to play against an AI or human opponent",
    github: "https://github.com/jlangy/battleship",
    pictures: ["url(battleship1.png)", "url(battleship2.png)", "url(battleship3.png)"],
    tags: ["sass", "jquery", 'javascript', 'postgres'],
  },
];

const tags = {
  javascript: true,
  node: true,
  express: true,
  HTML: true,
  ruby: true,
  python: true,
  rails: true,
  jquery: true
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
    <div id='projects'>
      <Container className={classes.profileContainer} >
        <Card >
          <ProjectSelector activeTags={activeTags} filterTags={filterTags} />
          <h2 className={classes.title}>Projects</h2>
          <div className={classes.grid}>
            {Object.values(activeProjects).map((project, i) => (
              <div className={classes.square} key={i}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default ProjectsGrid;
