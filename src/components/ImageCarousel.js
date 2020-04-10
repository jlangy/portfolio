import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  slide: {
    backgroundSize: 'cover',
    display: 'inline-block'
  },
  container: {
    position: 'relative',
    transition: 'right 0.5s'
  },
  leftArrow: {
    position: 'absolute', 
    top: '125px', 
    fontSize: '50px'
  },
  rightArrow: {
    position: 'absolute', 
    top: '125px', 
    fontSize: '50px',
    right: 0
  }
});

function ImageCarousel(props) {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const classes = useStyles();

  const switchRight = () => {
    if(backgroundImageIndex < 2){
      setBackgroundImageIndex(prev => prev + 1);
    } else {
      setBackgroundImageIndex(0);
    }
  }
  
  const switchLeft = () => {
    if(backgroundImageIndex > 0){
      setBackgroundImageIndex(prev => prev - 1);
    } else {
      setBackgroundImageIndex(props.slides.length - 1);
    }
  }

  const slideStyle = {
    width: `${props.width}px`,
    height: `${props.height}px`
  }

  const containerStyle = {
    width: `${props.width * props.slides.length}px`,
    height: props.height,
    right: `${345 * backgroundImageIndex}px`
  }

  const arrowStyle = {
    top: `${(Number(props.height) - 50) / 2}px`,
  }


  return (
    <div style={{position: 'relative'}}>
      <div className={classes.container} style={containerStyle}>
        {props.slides.map(slide => <div className={classes.slide} style={{...slideStyle, backgroundImage: slide}}>
        </div>)}
      </div>
      <i className={"fas fa-chevron-left " + classes.leftArrow} onClick={switchLeft} style={arrowStyle}></i>
      <i className={"fas fa-chevron-right " + classes.rightArrow} onClick={switchRight} style={arrowStyle}></i>
    </div>
  )
}

export default ImageCarousel;
