import React from 'react';

function GameStats(props) {
  return (
    <section>
      <h2>Missed Letters:</h2>
      <ul id="game-stats">
        {Object.entries(props.stats).map(([key, value]) => <li>{key}: {value}</li>)}
      </ul>
  </section>
  )
}

export default GameStats;
