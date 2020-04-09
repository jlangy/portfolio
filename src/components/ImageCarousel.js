import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    backgroundSize: 'cover',
    height: '300px',
    display: 'inline-block'
  },
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
      <div className={classes.container} style={{backgroundImage: 'url(dog.jpeg)', width: backgroundImageIndex == 0 ? '100%' : 0}}>
        <i className="fas fa-chevron-left" style={{visibility: backgroundImageIndex == 0 ? '' : 'hidden'}} onClick={switchLeft}></i>
        <i className="fas fa-chevron-right" style={{visibility: backgroundImageIndex == 0 ? '' : 'hidden'}} onClick={switchRight}></i>
      </div>

      <div className={classes.container} style={{backgroundImage: 'url(dog2.jpeg)', width: backgroundImageIndex == 1 ? '100%' : 0}}>
        <i className="fas fa-chevron-left" style={{visibility: backgroundImageIndex == 1 ? '' : 'hidden'}} onClick={switchLeft}></i>
        <i className="fas fa-chevron-right" style={{visibility: backgroundImageIndex == 1 ? '' : 'hidden'}} onClick={switchRight}></i>
      </div>
    </div>
  )
}

export default ImageCarousel;
