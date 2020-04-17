import React, {useState, useEffect, useRef} from 'react';
import ScoreContainer from './ScoreContainer';
import GameText from './GameText'
import GameStats from './GameStats'
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

const speedMutliplier = textPosition => {
  if(textPosition < CONTAINER_WIDTH / 4){
    return 8
  }
  if(textPosition < CONTAINER_WIDTH / 1.33){
    return 4
  }
  else{
    return 2
  }
}

function TypeGame(props) {

  const [state, setState] = useState({
    gameTextContainer: document.getElementById('game-text'),
    lettersArray: text.split(''),
    mistakes: 0,
    lastWordLetterIndex: 0,
    mistakesMap: {},
    textPosition: -(FONT_WIDTH * text.length)
  });

  //Updated in event handler, need to use a ref to get current values
  const letterIndex = useRef(0);
  const visibleLetterIndex = useRef(0);
  const time = useRef(Date.now());
  
  const successfulWordsRef = useRef(0);
  const [successfulWords, _setSuccessfulWords] = useState(0);
  const setSuccessfulWords = (num) => {
    if(num !== undefined){
      successfulWordsRef.current = num;
    } else {
      successfulWordsRef.current++;
    }
    _setSuccessfulWords(successfulWordsRef.current)
  }
  const cursorPosition = useRef(0);
  const mistakesMap = useRef({});
  const mistakes = useRef(0);
  const gameOn = useRef(false);
  const [gameEnd, setGameEnd] = useState(false);
  const textPosition = useRef(-(FONT_WIDTH * text.length));

  const endGame = () => {
    gameOn.current = false;
    setGameEnd(true);
    document.removeEventListener('keydown', handleKeyPress)
  }

  const moveText = () => {
    if(cursorPosition.current > CONTAINER_WIDTH){
      document.getElementById('game-text').style.color = 'red';
      return endGame();
    }
    if(!gameOn.current){
      return
    }
    const shiftAmount = BASE_SPEED * speedMutliplier(cursorPosition.current);
    textPosition.current += shiftAmount;
    cursorPosition.current += shiftAmount;
    setState({...state, textPosition: textPosition.current})
    requestAnimationFrame(moveText)
  }

  const updateWords = () => {
    //if end of game
    letterIndex.current++;
    cursorPosition.current -= FONT_WIDTH
    if(state.lettersArray.length === letterIndex.current){
      setSuccessfulWords();
      return endGame();
    }
    if(state.lettersArray[letterIndex.current] === " "){
      setSuccessfulWords();
      visibleLetterIndex.current = letterIndex.current;
    }
  }

  const reset = () => {
    letterIndex.current = 0;
    visibleLetterIndex.current = 0;
    setSuccessfulWords(0);
    cursorPosition.current = 0;
    mistakesMap.current = {};
    mistakes.current = 0;
    textPosition.current = -(FONT_WIDTH * text.length);
    time.current = Date.now();
    document.getElementById('game-text').style.color = 'orange';  
    setGameEnd(false);
  }

  const startGame = () => {
    if(!gameOn.current){
      document.getElementById('start-btn').blur();
      reset();
      gameOn.current = true;
      document.addEventListener('keydown', handleKeyPress);
      moveText();
    }
  }

  const handleKeyPress = event => {
    //Stopping focus changes on firefox apostrophe click
    event.preventDefault();
    const currentLetter = state.lettersArray[letterIndex.current];
    if(event.key === currentLetter.toLowerCase()){
      updateWords();
    }
    else {
      mistakes.current += 1;
      mistakesMap.current[event.key] = mistakesMap.current[event.key] ? mistakesMap.current[event.key] + 1 : 1;
    }
  }

  const classes = useStyles();

  return (
  <main style={{height: props.playing ? 200 : 0}} className={classes.container}>
    <div>
      <h2 className={classes.title}>Typeracer</h2>
      <button className={classes.startBtn} id='start-btn' onClick={startGame}>Go!</button>
    </div>
    <div id="game-container">
      <GameText 
        lettersArray={state.lettersArray} 
        letterIndex={letterIndex.current} 
        visibleLetterIndex={visibleLetterIndex.current}
        rightShift={state.textPosition}/>
    </div>
    <ScoreContainer errors={mistakes.current} successfulWords={successfulWords}/>
    {gameEnd && <GameStats time={time.current} successfulWords={successfulWords} errors={mistakes.current} restart={startGame} close={props.close}/>}
  </main>
  )
}

export default TypeGame;
