import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import { Card, Container } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: 'space-around'
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
    title: "Flower Identifier",
    content: "Website showing a machine learning algorithm for predicting flower species. Website built with python and flask. Identifier algorithm built with python, pytorch, and torchvision.",
    github: false,
    link: "https://flowers-predictor-api-heroku.herokuapp.com/predict",
    pictures: ["url(flowers1.webp)", "url(flowers2.webp)"],
    tags: ["python","flask", "pandas", "numpy", "torch", "torchvision"],
  },
  {
    title: "Mapper",
    content: "A map building application using the google maps API. Allows users to create maps with pinned locations, descriptions and images of locations anywhere.",
    github: true,
    link: "https://github.com/jlangy/mapper",
    pictures: ["url(Mapper1.webp)", "url(Mapper2.webp)","url(Mapper3.webp)"],
    tags: ["express", "ejs", "jquery", "node", "javascript", 'postgres', 'sass'],
  },
  {
    title: "Cambio",
    content: "A card game for 2-4 players. Built with react, redux and websockets.",
    github: false,
    link: "https://warm-journey-82598.herokuapp.com/",
    pictures: ["url(cambio2.webp)","url(cambio3.webp)", "url(cambio1.webp)"],
    tags: ["express", "ejs", "jquery", "node", "javascript", 'postgres', 'sass'],
  },
  {
    title: "Headbandz",
    content: "A group chat application built with socket.io and WebRTC. Allows people to play the classic headbands game, where they can pass each other famous names to guess.",
    github: false,
    link: "https://peaceful-beach-72908.herokuapp.com",
    pictures: ["url(Headbandz1.webp)", "url(Headbandz2.webp)","url(Headbandz3.webp)"],
    tags: ["express", "node", "javascript", 'sass', 'react', 'redux'],
  },
  {
    title: "Scheduler",
    content: "A scheduling app for booking appointments. Built with websockets for automatic updates across connected users.",
    github: true,
    link: "https://github.com/jlangy/scheduler",
    pictures: ["url(scheduler1.webp)", "url(scheduler2.webp)", "url(scheduler3.webp)"],
    tags: ["react", "node", "javascript"],
  },
  {
    title: "Traderu",
    content: "A stock trading game app to buy and sell stocks and cryptocurrencies with fake money and compete to make the most.",
    github: true,
    link: "https://github.com/bryce-mcmath/traderu",
    pictures: ["url(traderu1.webp)", "url(traderu2.webp)", "url(traderu3.webp)"],
    tags: ["vue", "express", "node", 'postgres', 'sass'],
  },
  {
    title: "Jungle",
    content: "A product sales platform to browse and buy different products. Includes administrator dashboard",
    github: true,
    link: "https://github.com/jlangy/jungle",
    pictures: ["url(jungle1.webp)", "url(jungle2.webp)", "url(jungle3.webp)"],
    tags: ["ruby", "rails"],
  },
  // {
  //   title: "tweeter",
  //   content: "A restyled twitter clone for posting short messages",
  //   github: "https://github.com/jlangy/tweeter",
  //   pictures: ["url(tweeter1.png)", "url(tweeter2.png)", "url(tweeter3.png)"],
  //   tags: ["sass", "jquery", 'javascript'],
  // },
  {
    title: "battleship",
    content: "An online version of the classic battlehip game. Options to play against an AI or human opponent",
    github: true,
    link: "https://github.com/jlangy/battleship",
    pictures: ["url(battleship1.webp)", "url(battleship2.webp)", "url(battleship3.webp)"],
    tags: ["sass", "jquery", 'javascript', 'postgres'],
  },
];

// const tags = {
//   javascript: true,
//   node: true,
//   express: true,
//   HTML: true,
//   ruby: true,
//   python: true,
//   rails: true,
//   jquery: true
// };

function ProjectsGrid() {
  const classes = useStyles();
  // const [activeTags, setActiveTags] = useState(tags);
  // const [activeProjects, setActiveProjects] = useState(projects);

  // const filterTags = (tag) => {
  //   if (activeTags[tag]) {
  //     const newTags = { ...activeTags };
  //     newTags[tag] = false;
  //     setActiveTags(newTags);
  //     filterProjects(newTags);
  //   } else {
  //     const newTags = { ...activeTags };
  //     newTags[tag] = true;
  //     setActiveTags(newTags);
  //     filterProjects(newTags);
  //   }
  // };

  // const filterProjects = (tags) => {
  //   const activeProjects = projects.filter((project) =>
  //     project.tags.some((tag) => tags[tag])
  //   );
  //   setActiveProjects(activeProjects);
  // };

  return (
    <div id='projects'>
      <Container className={classes.profileContainer} >
        <Card >
          {/* <ProjectSelector activeTags={activeTags} filterTags={filterTags} /> */}
          <h2 className={classes.title}>Projects</h2>
          <div className={classes.grid}>
            {Object.values(projects).map((project, i) => (
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
