import React from 'react';
import Letter from './Letter'

function GameText(props) {

  const rightShift = {right: `${props.rightShift}px`}
  return (
    <div id="game-text" style={rightShift}>
      {props.lettersArray.map((letter,i) => <Letter 
        letter={letter.split('')} 
        key={i} 
        index={i} 
        letterIndex={props.letterIndex} 
        visibleLetterIndex={props.visibleLetterIndex}/>)}
    </div>
  )
}

export default GameText;
