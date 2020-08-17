import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import { AppBar, Box, Container, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'left',
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
  },

  navButtons: {
    padding: '1rem',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    fontSize: '1rem',
    background: 'lightgrey',
  },
});

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container>
        <Box className={classes.root}>
          <Typography variant="h3">The Jumpstart Blog</Typography>
          <Button
            size="large"
            className={classes.navButtons}
            endIcon={<HomeIcon />}
          >
            Home
          </Button>
          <Button
            size="large"
            className={classes.navButtons}
            endIcon={<AddIcon />}
          >
            Add A Post
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBar;
