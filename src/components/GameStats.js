import React, {useState, useEffect} from 'react';
import { Dialog } from '@material-ui/core'

function GameStats(props) {
  const [open, setOpen] = useState(true);
  const [countDown, setCountDown] = useState(null)

  useEffect(() => {
    if(countDown === null){
      return;
    }
    if(countDown === 0){
      setTimeout(() => {
        setOpen(false);
        props.restart();
      }, 500);
    } else {
      setTimeout(() => {
        setCountDown(countDown => countDown - 1);
      }, 1000);
    }
  }, [countDown])

  const restart = () => {
    setCountDown(3);
  }
  return (
    <Dialog open={open}>
      <h2>Missed Letters:</h2>
      <ul id="game-stats">
        {countDown !== false && <h1>{countDown}</h1>}
        {countDown !== 0 && Object.entries(props.stats).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
        <button onClick={() => setOpen(false)}>Close</button>
        <button onClick={restart}>Play Again</button>
      </ul>
    </Dialog>
  )
}

export default GameStats;
