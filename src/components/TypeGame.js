import React, {useState, useEffect, useRef} from 'react';
import ScoreContainer from './ScoreContainer';
import GameText from './GameText'
import GameStats from './GameStats'
import { makeStyles } from '@material-ui/core/styles';


const FONT_WIDTH = 12.2;
const BASE_SPEED = 0.3;
const CONTAINER_WIDTH = 1000;

const useStyles = makeStyles({
  gameText: {
    position: 'relative',
    right: 0,
    fontFamily: 'monospace',
    fontSize: '20px',
    whiteSpace: 'nowrap',
    color: 'rgb(255, 123, 71)',
    display: 'flex',
  }
});

const successFlash = () => {
  const borderArray = Array.from(document.getElementsByClassName('successFlash'));
  borderArray.forEach((el) => {
    el.style.animation = 'successFlash .3s'
  });
  setTimeout(() => {
    borderArray.forEach(el => {
      el.style.animation = ''
    })
  }, 300);
}

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
    lettersArray: props.text.split(''),
    time: Date.now(),
    mistakes: 0,
    lastWordLetterIndex: 0,
    mistakesMap: {},
    textPosition: -(FONT_WIDTH * props.text.length)
  });

  //Updated in event handler, need to use a ref to get current values
  const letterIndex = useRef(0);
  const visibleLetterIndex = useRef(0);
  
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
  const textPosition = useRef(-(FONT_WIDTH * props.text.length));

  const classes = useStyles();
  
  useEffect(() => {
    setState({...state, gameTextContainer:document.getElementById('game-text')})
  }, []);

  const endGame = () => {
    gameOn.current = false;
    setGameEnd(true);
    document.removeEventListener('keydown', handleKeyPress)
  }

  const moveText = () => {
    if(cursorPosition.current > CONTAINER_WIDTH){
      state.gameTextContainer.style.color = 'red';
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
    successFlash();
  }

  const reset = () => {
    letterIndex.current = 0;
    visibleLetterIndex.current = 0;
    setSuccessfulWords(0);
    cursorPosition.current = 0;
    mistakesMap.current = {};
    mistakes.current = 0;
    textPosition.current = -(FONT_WIDTH * props.text.length);
    state.gameTextContainer.style.color = 'orange';
    setState({
      lettersArray: props.text.split(''),
      textPosition : -(FONT_WIDTH * props.text.length),
      time: Date.now(),
      mistakes: 0,
      lastWordLetterIndex: 0,
    });
    setGameEnd(false);
  }

  const startGame = () => {
    if(!gameOn.current){
      reset();
      document.getElementById('start').blur();
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
      console.log(mistakesMap)
    }
  }

  return (
  <main>
    <ScoreContainer errors={mistakes.current} successfulWords={successfulWords}/>
    <div id="game-container">
      <GameText 
        lettersArray={state.lettersArray} 
        letterIndex={letterIndex.current} 
        visibleLetterIndex={visibleLetterIndex.current}
        rightShift={state.textPosition}/>
    </div>
    
    <div id="border-sides" className="successFlash">
      <div id="border-top-bottom" className="successFlash">
      </div>
    </div>
    <button id="start" onClick={startGame}>Start Game</button>
    {gameEnd && <GameStats stats={mistakesMap.current} />}
  </main>
  )
}

export default TypeGame;
