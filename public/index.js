const FONT_WIDTH = 12.18333;
const BASE_SPEED = 0.35;
let CONTAINER_WIDTH = 1000;


const setState = () => {
  return {
    gameTextContainer : document.getElementById('game-text'),
    gameText : `Thanks for reading my intro! The idea behind this game is to teach typing using scrolling text to encourage students not to look at the keyboard. Focus on accuracy, keeping your eyes on the text, and build up your confidence in finding the keys from memory. The text will slow down as it goes to the left, giving you more time. As you get faster, you can stay close to the right and increase your WPM. Thanks for playing!`,
    textPosition : 0,
    successfulWords: 0,
    time: Date.now(),
    mistakes: 0,
    totalLetters: 0,
    gameOver: false,
    shift: 0
  }
}

const resetDom = () => {
  document.getElementById('game-text').innerHTML = '';
  document.getElementById('game-text').style.color = 'rgb(255, 123, 71)';
  document.getElementById('successful-words').innerHTML = '0'
  document.getElementById('typing-errors').innerHTML = '0'
}

let state = {gameOver: true};

const generateGameLetters = () => {
  for(letter of state.gameText.split('')){
    const letterContainer = document.createElement("span");
    letterContainer.innerHTML = letter;
    state.gameTextContainer.appendChild(letterContainer);
  }
  state.gameTextContainer.style.right = -state.gameText.length * FONT_WIDTH + "px";
}

const startGame = () => {
  if(state.gameOver){
    document.getElementById('endgame-message').style.visibility = 'hidden';
    state = setState();
    state.shift = -state.gameText.length * FONT_WIDTH;
    resetDom();
    state.wordsArray = wordsArray(state.gameText);
    generateGameLetters();
    state.gameTextContainer.style.right = -state.gameText.length*FONT_WIDTH + "px";
    document.addEventListener('keydown', handleKeyPress)
    moveText();
  }
}

const updateWords = (key) => {
  Array.from(state.gameTextContainer.children)[state.totalLetters - 1].style.color = "rgb(0,255,0)";
  state.textPosition -= FONT_WIDTH;
  if(key === ' '){
    state.successfulWords += 1;
    document.getElementById('successful-words').innerHTML = state.successfulWords;
    const lettersToRemove = Array.from(state.gameTextContainer.children).slice(0,state.totalLetters);
    lettersToRemove.forEach(letter => letter.style.visibility = 'hidden');
  } 
  if(state.totalLetters === state.gameText.length){
    endGame();
  }
}

const endGame = () => {
  state.gameOver = true;
  const minutesTaken = (Date.now() - state.time) / 60000;
  const wpm = Math.round(state.successfulWords / minutesTaken);
  const endgameMessage = document.getElementById('endgame-message');
  endgameMessage.innerText = `You typed at ${state.successfulWords} words at a speed of ${wpm} words per minute with ${state.mistakes} errors. Hit start game to play again.`;
  endgameMessage.style.visibility = 'visible';
}

const handleKeyPress = event => {
  //Stopping focus changes on firefox apostrophe click
  event.preventDefault();
  const currentLetter = state.gameText[state.totalLetters];
  if(event.key === currentLetter){
    state.totalLetters += 1;
    updateWords(event.key);
  }
  else {
    state.mistakes += 1;
    document.getElementById('typing-errors').innerHTML = state.mistakes
  }
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
  state.shift += shiftAmount;
  state.gameTextContainer.style.right = state.shift + "px";
  requestAnimationFrame(moveText)
}

const openGame = () => {
  const open = document.getElementById('type-game').style.height === '330px'
  if(open){
    document.getElementById('type-game').style.height = "0px";
    endGame();
    document.getElementById('endgame-message').style.visibility = 'hidden'
    resetDom();
  } else {
    document.getElementById('type-game').style.height = "330px";
  }
}

window.onload = () => {
  CONTAINER_WIDTH = window.innerWidth < 1250 ? window.innerWidth * 0.8 : CONTAINER_WIDTH;
  const typeGame = document.createElement('div');
  typeGame.innerHTML = `
  <section id="type-game">
  <main>
  <div id="game-title-container">
    <h2 class="game-title">Typeracer </h2>
    <button id="start" onclick="startGame()">Start Game</button>
  </div>
    <p class="typegame-text">
      Type the words (with spaces) as they scroll by. The closer you can keep to the right side, the faster the words will scroll and the better words per minute you can get. 
    </p>
    <div id="game-container">
      <div id="game-text"></div>
    </div>
    <div id="gameInfo">
      <div>Successful Words: <span id="successful-words">0</span></div>
      <div>Errors: <span id="typing-errors">0</span></div>
    </div>
    <div id="endgame-message"></div>
  </main>
</section>`;
  
  document.getElementById('projects') && document.getElementById('projects').parentNode.insertBefore(typeGame, document.getElementById('projects'));
  document.getElementById('game-dropdown-btn') && document.getElementById('game-dropdown-btn').addEventListener('click', openGame);
}