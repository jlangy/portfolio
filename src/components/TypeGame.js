import React, {useState, useEffect, useRef} from 'react';
import ScoreContainer from './ScoreContainer';
import GameText from './GameText'
import GameStats from './GameStats'
import startGame from '../typeGame'
import { makeStyles } from "@material-ui/core/styles";

const FONT_WIDTH = 12.2;
const BASE_SPEED = 0.3;
const CONTAINER_WIDTH = 1000;
const text="some sample text"

const useStyles = makeStyles({
  container: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100vw',
    overflow: 'hidden',
    alignItems: 'center',
    transition: 'height 0.4s'
  },
  title: {
    fontSize: "2em",
    fontFamily: "Bangers",
    display: 'inline-block'
  },
  startBtn: {
    background: 'orange',
    border: 'none',
    marginLeft: "20px",
    fontSize: '1.9em',
    fontFamily: "Bangers",
    color: "red",
    borderRadius: '5px',
    cursor: 'pointer'
  }
});

function TypeGame(props) {
  const classes = useStyles();

  return (
  <main style={{height: props.playing ? 200 : 0}} className={classes.container}>
    <div>
      <h2 className={classes.title}>Typeracer</h2>
      <button className={classes.startBtn} id='start-btn' onClick={startGame}>Go!</button>
    </div>
    <div id="game-container">
      <div id="game-text"></div>
    </div>
    <ScoreContainer/>
    {/* {gameEnd && <GameStats time={time.current} successfulWords={successfulWords} errors={mistakes.current} restart={startGame} close={props.close}/>} */}
  </main>
  )
}

export default TypeGame;
