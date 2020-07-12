import React from 'react';
import { Card, Avatar, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    width: '250px',
    height: '250px'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '20px',
    alignItems: 'center',
    '@media(max-width: 500px)': {
      flexDirection: 'column'
    }
  },
  introductionTitle: {
    fontSize: '4em',
    paddingLeft: '50px',
    '@media(max-width: 500px)': {
      fontSize: '3em'
    }
  },
  hr: {
    border: 0,
    height: '1px',
    background: 'black',
    width: '100%',
    margin: '50px 0',
    backgroundImage: 'linear-gradient(to right, #ccc, #333, #ccc)'
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
  },
  margin: {
    marginTop: '20px'
  },
  introText: {
    fontSize: '2em',
    textAlign: 'center',
    padding: '20px 60px'
  },
  gameDropdown: {
    cursor: 'pointer',
    fontFamily: "Bangers"
  }
});

function Introduction(props) {
  const classes = useStyles();
  return (
    <Container className={classes.margin}>
      <Card className={classes.flexCol}>
        <div className={classes.flexRow}>
          <Avatar className={classes.avatar} src="./me.webp" alt="Jon Langlois" />
          <h2 className={classes.introductionTitle}>Hello, I'm Jon</h2>
        </div>
        <hr className={classes.hr}></hr>
        <div className="introduction-text">
          <p className={classes.introText}>I'm a Victoria-based full-stack web developer. I'm always up for a puzzle, and enjoy
          digging into a project that involves a lot of problem solving. In my free time, I enjoy making and playing games. 
  {window.innerWidth > 750 && <span className={classes.gameDropdown} id="game-dropdown-btn"> Check one out Here</span>} Feel free to have a look at some of my recent projects below,
           or <a href="mailto:jonathan-langlois@live.ca">get in touch.</a>

          </p>
        </div>
      </Card>
    </Container>
  );
}

export default Introduction;