import React from 'react';
import { Card, CardContent, Avatar, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  margin: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  title: {
    textAlign: 'center'
  },
  item: {
    padding: '10px 20px',
    fontSize: '1.2em'
  }
});

function Introduction(props) {
  const classes = useStyles();
  return (
    <Container className={classes.margin}>
      <Card>
        <h2 className={classes.title}>Get in touch</h2>
        <section className={classes.flex}>
          <span className={classes.item}>Email me at: <a href="mailto:jonathan-langlois@live.ca">jonathan-langlois@live.ca</a></span>
          <span className={classes.item}>See my <a href="www.linkedin.com/in/jon-langlois-00878ab8">Linkedin</a> profile</span>
          <span className={classes.item}>Check out more work at <a href="https://github.com/">Github</a></span>
          <span className={classes.item}>See some code snippets at <a href="https://codepen.io/jlangy">Codepen</a></span>
        </section>
      </Card>
    </Container>
  );
}

export default Introduction;