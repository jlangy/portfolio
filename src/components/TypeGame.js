import React from 'react';

function TypeGame() {
  return (
  <main>
    <div id="score-container">
      <div>Successful Words: <span id="successful-words">0</span></div>
      <div>WPM: <span id="wpm">0</span></div>
      <div>Errors: <span id="typing-errors">0</span></div>
    </div>
    <div id="game-container">
      <div id="game-text">
      </div>
    </div>
    <div id="border-sides" className="successFlash">
      <div id="border-top-bottom" className="successFlash">
      </div>
    </div>
    <button id="start">Start Game</button>
    <section>
      <ul id="game-stats">

      </ul>
    </section>
  </main>
  )
}

export default TypeGame;
