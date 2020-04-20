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
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  projectLink: {
    fontSize: '1.5em'
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ImageCarousel
        height='300'
        width='345'
        slides={props.project.pictures}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          <span className={classes.projectHeader}>
            {props.project.title}
            <a href={props.project.github}><i className={classes.projectLink + " fab fa-github"}></i></a>
          </span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.project.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
