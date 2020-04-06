import React from 'react';
import Letter from './Letter'

function Word(props) {
  return (
    <div>
      {props.word.map((letter,i) => <Letter key={i} letter={letter}/>)}
    </div>
  )
}

export default Word;
