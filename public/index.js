const FONT_WIDTH = 12.18333;
const BASE_SPEED = .1;
const CONTAINER_WIDTH = 1000;


const setState = () => {
  return {
    wordsArray: [],
    gameTextContainer : document.getElementById('game-text'),
    gameText : `What's our go to market strategy? golden goose vec. Bleeding edge time vampire drink from the firehose, eighteen nineteen twenty What's our go to market strategy? golden goose vec. Bleeding edge time vampire drink from the firehose, eighteen nineteen twenty What's our go to market strategy? golden goose vec. Bleeding edge time vampire drink from the firehose, eighteen nineteen twenty`,
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

let state = {gameOver: true};

const generateGameLetters = () => {
  for(letter of state.gameText.split('')){
    const letterContainer = document.createElement("span");
    letterContainer.innerHTML = letter;
    state.gameTextContainer.appendChild(letterContainer);
  }
  state.gameTextContainer.style.right = state.gameText.length * FONT_WIDTH + "px";
}

const startGame = () => {
  console.log(state.gameOver)
  if(state.gameOver){
    state = setState();
    resetDom();
    state.wordsArray = wordsArray(state.gameText);
    generateGameLetters();
    state.gameTextContainer.style.right = -state.gameText.length*FONT_WIDTH + "px";
    document.addEventListener('keydown', handleKeyPress)
    moveText();
  }
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

const handleKeyPress = event => {
  //Stopping focus changes on firefox apostrophe click
  event.preventDefault();
  const currentLetter = state.wordsArray[state.wordIndex][state.letterIndex];
  if(event.key === currentLetter.toLowerCase()){
    state.totalLetters += 1;
    updateWords();
  }
  else {
    state.mistakes += 1;
    state.mistakesMap[currentLetter] = state.mistakesMap[currentLetter] ? state.mistakesMap[currentLetter] + 1 : 1; 
    document.getElementById('typing-errors').innerHTML = state.mistakes
  }
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

const moveText = () => {
  if(state.textPosition > CONTAINER_WIDTH){
    document.getElementById('game-text').style.color = 'red';
    endGame();
    return;
  }
  if(state.gameOver){
    return
  }
  const shiftAmount = BASE_SPEED * speedMutliplier(state.textPosition);
  state.textPosition += shiftAmount;
  const rightShift = state.gameTextContainer.style.right;
  const rightShiftNumeric = Number(rightShift.slice(0, rightShift.length - 2));
  state.gameTextContainer.style.right = (rightShiftNumeric + shiftAmount) + "px";
  requestAnimationFrame(moveText)
}

document.getElementById('start').addEventListener('click', () => {
  startGame();
  document.getElementById('start').blur();
});

const printGameStats = () => {
  const container = document.getElementById('game-stats');
  container.append(document.createElement('h2').innerHTML = 'Missed Letter Stats')
  const stats = Object.entries(state.mistakesMap).sort((a,b) => {
    return b[1] - a[1];
  })
  for (stat of stats){
    const letterStatEl = document.createElement('li')
    letterStatEl.classList += 'game-stat'
    letterStatEl.innerHTML = `${stat[0]} : ${stat[1]}`
    container.append(letterStatEl)
  }
}
