import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '4.5rem',
    borderStyle: 'solid',
    textAlign: 'center',
    marginLeft: '-2rem',
  },

  root2: {
    padding: '1rem',
  },

  searchBy: {
    marginTop: '1.5rem',
  },

  filters: {
    background: 'lightgrey',
    marginTop: '1rem',
  },
});

const SideBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Box className={classes.root2}>
        <Grid item>
          <Typography variant="h5">
            Welcome to the C4C Jumpstart Blog! Feel free to checkout the recent
            posts and contribute to our post collection.
          </Typography>
        </Grid>
        <Grid item className={classes.searchBy}>
          <Grid container>
            <Grid item xs={12}>
              <Typography>Search By:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.filters}>Likes</Button>
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.filters}>Recent</Button>
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.filters}>Longest</Button>
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.filters}>Featured</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SideBar;
