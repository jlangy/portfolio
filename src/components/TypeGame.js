import React, {useState, useEffect, useRef} from 'react';
import ScoreContainer from './ScoreContainer';
import Letter from './Letter'
import { makeStyles } from '@material-ui/core/styles';

const FONT_WIDTH = 12.2;
const BASE_SPEED = .15;
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
    textPosition : 0,
    wordIndex: 0,
    letterIndex: 0,
    successfulWords: 0,
    time: Date.now(),
    mistakes: 0,
    lastWordLetterIndex: 0,
    mistakesMap: {},
    gameOver: false,
  });

  //Updated in event handler, need to use a ref to get current values
  const letterIndex = useRef(0);
  const visibleLetterIndex = useRef(0);
  const successfulWords = useRef(0);

  const classes = useStyles();
  
  useEffect(() => {
    setState({...state, gameTextContainer:document.getElementById('game-text')})
  }, []);

  const endGame = () => {
    // printGameStats();
    state.gameOver = true;
  }

  const moveText = () => {
    if(state.textPosition > CONTAINER_WIDTH){
      state.gameTextContainer.style.color = 'red';
      // endGame();
      return;
    }
    if(state.gameOver){
      return
    }
    const shiftAmount = BASE_SPEED * speedMutliplier(state.textPosition);
    state.textPosition += shiftAmount;
    const rightShift = state.gameTextContainer.style.right;
    const rightShiftNumeric = Number(rightShift.slice(0, rightShift.length - 2));
    state.gameTextContainer.style.right = (rightShiftNumeric + shiftAmount) + "px"
    setState({...state, textPosition: state.textPosition + shiftAmount})
    requestAnimationFrame(moveText)
  }

  const updateWords = () => {
    //if end of game
    if(state.lettersArray.length + 1 === letterIndex.current){
      return endGame();
    }
    if(state.lettersArray[letterIndex.current] === " "){
      successfulWords.current++;
      visibleLetterIndex.current = letterIndex.current;
    }
    letterIndex.current++;
    successFlash();
  }


  const startGame = () => {
    setState({
      lettersArray: props.text.split(''),
      textPosition : 0,
      successfulWords: 0,
      time: Date.now(),
      mistakes: 0,
      lastWordLetterIndex: 0,
      mistakesMap: {},
      gameOver: false,
    });
    document.addEventListener('keydown', handleKeyPress);
    moveText(state);
  }

  const handleKeyPress = event => {
    //Stopping focus changes on firefox apostrophe click
    event.preventDefault();
    const currentLetter = state.lettersArray[letterIndex.current];
    if(event.key === currentLetter.toLowerCase()){
      updateWords();
    }
    else {
      state.mistakes += 1;
      state.mistakesMap[currentLetter] = state.mistakesMap[currentLetter] ? state.mistakesMap[currentLetter] + 1 : 1; 
      document.getElementById('typing-errors').innerHTML = state.mistakes
    }
  }

  return (
  <main>
    <ScoreContainer errors={state.errors} successfulWords={state.successfulWords}/>
    <div id="game-container">
      <div id="game-text">
        {state.lettersArray.map((letter,i) => <Letter 
          letter={letter.split('')} 
          key={i} 
          index={i} 
          letterIndex={letterIndex.current} 
          visibleLetterIndex={visibleLetterIndex.current}/>)}
      </div>
    </div>
    <div id="border-sides" className="successFlash">
      <div id="border-top-bottom" className="successFlash">
      </div>
    </div>
    <button id="start" onClick={startGame}>Start Game</button>
    <section>
      <ul id="game-stats" className={classes.gameText}>

      </ul>
    </section>
  </main>
  )
}

export default TypeGame;
