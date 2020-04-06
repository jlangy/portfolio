import React, {useEffect} from 'react';
import './App.css';
import Introduction from './components/Introduction'
import TypeGame from './components/TypeGame'
const FONT_WIDTH = 12.2;
const BASE_SPEED = .15;
const CONTAINER_WIDTH = 1000;

const wordsArray = text => text.split(' ').map(word => word.split(''));


const setState = () => {
  return {
    wordsArray: [],
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
  }
}

const resetDom = () => {
  document.getElementById('game-text').innerHTML = '';
  document.getElementById('game-text').style.color = 'rgb(255, 123, 71)';
  document.getElementById('successful-words').innerHTML = '0'
  document.getElementById('wpm').innerHTML = '0'
  document.getElementById('typing-errors').innerHTML = '0'
  document.getElementById('game-stats').innerHTML = ''
}

let state = {};

const generateGameLetters = () => {
  for(const letter of state.gameText.split('')){
    const letterContainer = document.createElement("span");
    letterContainer.innerHTML = letter;
    state.gameTextContainer.appendChild(letterContainer);
  }
  state.gameTextContainer.style.right = state.gameText.length * FONT_WIDTH + "px";
}

const updateWords = () => {
  const currentWord = state.wordsArray[state.wordIndex]
  if(state.letterIndex < currentWord.length - 1){
    Array.from(state.gameTextContainer.children)[state.totalLetters - 1].style.color = "rgb(0,255,0)";
    state.letterIndex++;
  } else {
    //Word finished. Need to remove letters, update textposition, update indices, add on a space to type before new word, 
    //update score stats, and flash green. A lot going on here
    const lettersToRemove = Array.from(state.gameTextContainer.children).slice(state.lastWordLetterIndex,state.totalLetters);
    if(state.wordIndex === state.wordsArray.length - 1){
      endGame();
    } else {
    state.lastWordLetterIndex += state.letterIndex;
    lettersToRemove.forEach(letter => letter.style.visibility = 'hidden')
    state.textPosition -= FONT_WIDTH * (state.letterIndex + 1);
    state.wordIndex ++;
    state.letterIndex = 0;
    state.wordsArray[state.wordIndex].unshift(' ');
    state.successfulWords += 1;
    document.getElementById('successful-words').innerHTML = state.successfulWords;
    document.getElementById('wpm').innerHTML = Math.round(state.successfulWords / ((Date.now() - state.time) / 60000));
    successFlash();
    }
  }
}

const endGame = () => {
  printGameStats();
  state.gameOver = true;
}

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

const printGameStats = () => {
  const container = document.getElementById('game-stats');
  container.append(document.createElement('h2').innerHTML = 'Missed Letter Stats')
  const stats = Object.entries(state.mistakesMap).sort((a,b) => {
    return b[1] - a[1];
  })
  for (const stat of stats){
    const letterStatEl = document.createElement('li')
    letterStatEl.classList += 'game-stat'
    letterStatEl.innerHTML = `${stat[0]} : ${stat[1]}`
    container.append(letterStatEl)
  }
}

function App() {
  return (
    <div className="App">
      <Introduction />
      <TypeGame text={"some sample text"}/>
    </div>
  );
}

export default App;
