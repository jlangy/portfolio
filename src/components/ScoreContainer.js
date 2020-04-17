import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '1000px',
    padding: '0 50px'
  },
  gameInformation: {
    fontFamily: 'Bangers',
    fontSize: '1.2em'
  }
});

function ScoreContainer(props) {
  const classes = useStyles();

  return (
    <div id="score-container" className={classes.container}>
      <div className={classes.gameInformation}>
        Successful Words: <span>{props.successfulWords}</span>
      </div>
      {/* <div>WPM: <span>{props.wpm}</span></div> */}
      <div id="typing-errors" className={classes.gameInformation}>
        Errors: <span>{props.errors}</span>
      </div>
    </div>
  );
}

export default ScoreContainer;
