import React from 'react';

function ScoreContainer(props) {
  return (
    <div id="score-container">
      <div>Successful Words: <span>{props.successfulWords}</span></div>
      {/* <div>WPM: <span>{props.wpm}</span></div> */}
  <div>Errors: <span>{props.errors}</span></div>
  </div>
  )
}

export default ScoreContainer;
