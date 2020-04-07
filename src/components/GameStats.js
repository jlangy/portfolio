import React from 'react';

function GameStats() {
  return (
    <section>
      <h2>Missed Letters:</h2>
      <ul id="game-stats">
        {}
      </ul>
  </section>
  )
}

export default GameStats;
// const stats = Object.entries(state.mistakesMap).sort((a,b) => {
//   return b[1] - a[1];
// })
// for (const stat of stats){
//   const letterStatEl = document.createElement('li')
//   letterStatEl.classList += 'game-stat'
//   letterStatEl.innerHTML = `${stat[0]} : ${stat[1]}`
//   container.append(letterStatEl)
// }