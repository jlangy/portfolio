import React, {useState, useEffect} from 'react';
import ScoreContainer from './ScoreContainer';
import Word from './Word';
const FONT_WIDTH = 12.2;
const BASE_SPEED = .15;
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
    wordsArray: props.text.split(' '),
    textPosition : 0,
    wordIndex: 0,
    letterIndex: 0,
    successfulWords: 0,
    time: Date.now(),
    mistakes: 0,
    totalLetters: 0,
    lastWordLetterIndex: 0,
    mistakesMap: {},
    gameOver: false,
  });

  useEffect(() => {
    setState({...state, gameTextContainer:document.getElementById('game-text')})
  }, []);
  
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

  const startGame = () => {
    setState({
      wordsArray: props.text.split(' '),
      textPosition : 0,
      wordIndex: 0,
      letterIndex: 0,
      successfulWords: 0,
      time: Date.now(),
      mistakes: 0,
      totalLetters: 0,
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
    const currentLetter = state.wordsArray[state.wordIndex][state.letterIndex];
    if(event.key === currentLetter.toLowerCase()){
      state.totalLetters += 1;
      // updateWords();
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
        {state.wordsArray.map((word,i) => <Word word={word.split('')} key={i}/>)}
      </div>
    </div>
    <div id="border-sides" className="successFlash">
      <div id="border-top-bottom" className="successFlash">
      </div>
    </div>
    <button id="start" onClick={startGame}>Start Game</button>
    <section>
      <ul id="game-stats">

      </ul>
    </section>
  </main>
  )
}

export default TypeGame;
