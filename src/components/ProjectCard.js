import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ImageCarousel from './ImageCarousel'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginBottom: 50,
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
  const [height, setHeight] = useState('300')
  const [width, setWidth] = useState('345')

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  function handleResize(){
    let width = window.innerWidth * 0.8 / 3;
    if(window.innerWidth < 900){
      width = window.innerWidth * 0.8;
    }
    width = width >= 345 ? 345 : width;
    setWidth(String(width));
    setHeight(String(width * 300 / 345))
  }

  return (
    <Card className={classes.root} style={{width: width + 'px'}}>
      <ImageCarousel
        // height='300'
        // width='345'
        height={height}
        width={width}
        slides={props.project.pictures}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          <span className={classes.projectHeader}>
            {props.project.title}
            <a href={props.project.link}><i className={classes.projectLink + (props.project.github ? " fab fa-github" : ' fas fa-link')}></i></a>
          </span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.project.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
