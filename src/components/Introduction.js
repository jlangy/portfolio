import React from 'react';
import { Card, CardContent, Avatar, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    width: '100px !important',
    height: '100px'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

function Introduction(props) {
  const classes = useStyles();
  return (
    <Container>
      <Card>
        <CardContent className={classes.flexRow}>
          <div className="introduction-text">
            <h1>Jon Langlois</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur soluta eum, assumenda, totam minima dolore adipisci cumque reiciendis accusantium vero alias. Repudiandae eius doloremque qui sunt nisi, itaque a perferendis.</p>
            <span onClick={props.startGame} style={{cursor: 'pointer'}}>Begin!</span>
          </div>
          <Avatar className={classes.avatar} src="./me.jpeg" alt="Jon Langlois" />
        </CardContent>
      </Card>
    </Container>
  );
}

export default Introduction;