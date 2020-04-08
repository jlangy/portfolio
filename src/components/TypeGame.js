import React, {useState, useEffect, useRef} from 'react';
import ScoreContainer from './ScoreContainer';
import GameText from './GameText'
import GameStats from './GameStats'

const FONT_WIDTH = 12.2;
const BASE_SPEED = 0.3;
const CONTAINER_WIDTH = 1000;

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
    mistakes: 0,
    lastWordLetterIndex: 0,
    mistakesMap: {},
    textPosition: -(FONT_WIDTH * props.text.length)
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
  const textPosition = useRef(-(FONT_WIDTH * props.text.length));
  
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
  }

  const reset = () => {
    letterIndex.current = 0;
    visibleLetterIndex.current = 0;
    setSuccessfulWords(0);
    cursorPosition.current = 0;
    mistakesMap.current = {};
    mistakes.current = 0;
    textPosition.current = -(FONT_WIDTH * props.text.length);
    time.current = Date.now();
    state.gameTextContainer.style.color = 'orange';
    setState({
      lettersArray: props.text.split(''),
      textPosition : -(FONT_WIDTH * props.text.length),
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
    <button id="start" onClick={startGame}>Start Game</button>
    {gameEnd && <GameStats time={time.current} successfulWords={successfulWords} errors={mistakes.current} restart={startGame} />}
  </main>
  )
}

export default TypeGame;
