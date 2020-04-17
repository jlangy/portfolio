import React, {useState, useEffect} from 'react';
import { Dialog } from '@material-ui/core'
import GameEndInfo from './GameEndInfo'
import { makeStyles } from '@material-ui/core/styles';
import './effects.css';

const useStyles = makeStyles({
  countDown: {
    background: 'rgba(0,0,0,0)',
    boxShadow: 'none'
  },
  number: {
    fontSize: '10em'
  },
  paper: {
    boxShadow: 'none'
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  }
});

function GameStats(props) {
  const [open, setOpen] = useState(true);
  const [countDown, setCountDown] = useState(null)

  useEffect(() => {
    if(countDown === null){
      return;
    }
    if(countDown === 'Go!'){
      setTimeout(() => {
        setOpen(false);
        props.restart();
      }, 500);
    } if(countDown === 1){
      setTimeout(() => {
        setCountDown('Go!');
      }, 1200);
    } else if(countDown > 1) {
      setTimeout(() => {
        setCountDown(countDown => countDown - 1);
        //reset animation
        let node = document.getElementById('number');
        node.classList.remove('number');
        void node.offsetWidth;
        node.classList.add("number")
      }, 1200);
    }
  }, [countDown])

  const restart = () => {
    setCountDown(3);
  }

  const close = () => {
    setOpen(false);
    props.close();
  }

  const classes = useStyles(); 

  return (
    <Dialog open={open} classes={countDown !== null ? {paper: classes.countDown} : {paper: classes.paper}}>
        {countDown !== null && <h1 id="number" className={`${classes.number} number`}>{countDown}</h1>}
        {countDown === null && <GameEndInfo setOpen={close} restart={restart} errors={props.errors} 
        successfulWords={props.successfulWords} time={props.time}/>}
    </Dialog>
  )
}

export default GameStats;
