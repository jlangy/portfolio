import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ImageCarousel from './ImageCarousel'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: '100px'
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  projectLink: {
    fontSize: '1.5em'
  }
});

export default function ProjectCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ImageCarousel
        height='300'
        width='345'
        slides={['url(dog.jpeg)', 'url(dog2.jpeg)', 'url(dog3.jpeg)']}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          <span className={classes.projectHeader}>
            Lizard
            <i className={classes.projectLink + " fab fa-github"}></i>
          </span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
