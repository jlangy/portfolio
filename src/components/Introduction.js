import React from 'react';
import { Card, CardContent, Avatar, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    width: '120px !important',
    height: '120px'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px'
  },
  margin: {
    marginTop: '20px'
  },
  introText: {
    fontSize: '2em',
    textAlign: 'center',
    paddingRight: '20px'
  }
});

function Introduction(props) {
  const classes = useStyles();
  return (
    <Container className={classes.margin}>
      <Card className={classes.flexRow}>
        <div className="introduction-text">
          <p className={classes.introText}>Hello! I am Jon Langlois, a Victoria-based full-stack web developer. I'm always up for a puzzle, and enjoy
          digging into a project that involves a lot of problem solving. In my free time, I love to make fun games, check one out 
          <span style={{cursor: 'pointer'}} id="game-dropdown-btn"> Here</span>. Feel free to have a look at some of my recent projects below, or 
           <a href="mailto:jonathan-langlois@live.ca"> get in touch.</a>

          </p>
        </div>
        <Avatar className={classes.avatar} src="./me.jpeg" alt="Jon Langlois" />
      </Card>
    </Container>
  );
}

export default Introduction;