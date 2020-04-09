import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles({
  slide: {
    backgroundSize: 'cover',
    height: '300px',
    width: '345px !important',
    display: 'inline-block'
  },
  container: {
    height: '300px',
    width: '690px',
    position: 'relative',
    transition: 'right 0.5s'
  }
});

function ImageCarousel() {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const classes = useStyles();

  const switchRight = () => {
    if(backgroundImageIndex < 1){
      setBackgroundImageIndex(prev => prev + 1);
    } else {
      setBackgroundImageIndex(0);
    }
  }
  
  const switchLeft = () => {
    if(backgroundImageIndex > 0){
      setBackgroundImageIndex(prev => prev - 1);
    } else {
      setBackgroundImageIndex(1);
    }
  }


  return (
    <div>
      <div className={classes.container} style={{right: `${345 * backgroundImageIndex}px`}}>
        <div className={classes.slide} style={{backgroundImage: 'url(dog.jpeg)'}}>
        </div>
        <div className={classes.slide} style={{backgroundImage: 'url(dog2.jpeg)'}}>
        </div>
      </div>
      <i className="fas fa-chevron-left" style={{display: backgroundImageIndex == 1 ? '' : 'none'}} onClick={switchLeft}></i>
      <i className="fas fa-chevron-right" style={{diaply: backgroundImageIndex == 1 ? '' : 'none'}} onClick={switchRight}></i>
    </div>
  )
}

export default ImageCarousel;
