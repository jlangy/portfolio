import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  slide: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: "inline-block",
    backgroundPosition: "center top",
    backgroundColor: "#f5edf0",
    maxHeight: 300,
    maxWidth: 345
  },
  container: {
    position: "relative",
    transition: "right 0.5s",
    maxHeight: 300,
  },
  leftArrow: {
    position: "absolute",
    fontSize: "50px",
  },
  rightArrow: {
    position: "absolute",
    fontSize: "50px",
    right: 0,
  },
});

function ImageCarousel(props) {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const classes = useStyles();

  const switchRight = () => {
    if (backgroundImageIndex < props.slides.length - 1) {
      setBackgroundImageIndex((prev) => prev + 1);
    } else {
      setBackgroundImageIndex(0);
    }
  };

  const switchLeft = () => {
    if (backgroundImageIndex > 0) {
      setBackgroundImageIndex((prev) => prev - 1);
    } else {
      setBackgroundImageIndex(props.slides.length - 1);
    }
  };

  const slideStyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
  };

  const containerStyle = {
    width: `${props.width * props.slides.length}px`,
    height: props.height,
    right: `${props.width * backgroundImageIndex}px`,
  };

  const arrowStyle = {
    top: `${(Number(props.height) - 50) / 2}px`,
  };

  return (
    <div style={{ position: "relative" }}>
      <div className={classes.container} style={containerStyle}>
        {props.slides.map((slide, i) => (
          <div
            key={i}
            className={classes.slide}
            style={{ ...slideStyle, backgroundImage: slide }}
          ></div>
        ))}
      </div>
      <i
        className={"fas fa-chevron-left " + classes.leftArrow}
        onClick={switchLeft}
        style={arrowStyle}
      ></i>
      <i
        className={"fas fa-chevron-right " + classes.rightArrow}
        onClick={switchRight}
        style={arrowStyle}
      ></i>
    </div>
  );
}

export default ImageCarousel;
