import React from 'react';
import Letter from './Letter'

function GameText(props) {
  return (
    <div id="game-text">
      {props.lettersArray.map((letter,i) => <Letter 
        letter={letter.split('')} 
        key={i} 
        index={i} 
        letterIndex={props.letterIndex} 
        rightShift={props.rightShift}
        visibleLetterIndex={props.visibleLetterIndex}/>)}
    </div>
  )
}

export default GameText;
