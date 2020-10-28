import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Clap from '@material-ui/icons/PanToolOutlined'; // the clap icon
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { getPost, clapPost, deletePost } from '../api/api';

const useStyles = makeStyles({
  root: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  title: {
    marginBottom: '.5rem',
    borderStyle: 'solid',
  },
  sub: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.25rem',
    borderStyle: 'solid',
  },
  deletePost: {
    padding: '0.5rem',
    background: 'lightgrey',
  },
  content: {
    borderStyle: 'solid',
    marginButton: '1rem',
  },
  clap: {
    '&:hover': {
      opacity: 0.5,
    },
  },
  dateCreated: {
    verticalAlign: 'middle',
    marginTop: '0.25rem',
  },
});

const Post: React.FC = () => {
  const classes = useStyles();

  // gets the current pathname and slices the postID
  const postID = parseInt(window.location.pathname.slice(7), 10);

  // allows us to keep track of the title
  const [title, setTitle] = useState('');

  // allows us to keep track of the author
  const [author, setAuthor] = useState('');

  // allows us to keep track of the body
  const [body, setBody] = useState('');

  // allows us to keep track of the claps
  const [clapCount, setClapCount] = useState(0);

  // allows us to keep track of the date the post was created on
  const [dateCreated, setDateCreated] = useState('');

  // allows us to keep track of if we have submitted or not
  const [redirect, setRedirect] = useState(false);

  // makes a GET request to get the BlogPost info
  useEffect(() => {
    getPost(postID).then((p) => {
      setTitle(p.title);
      setAuthor(p.author);
      setBody(p.body);
      setClapCount(p.clapCount);
      setDateCreated(p.dateCreated);
    });
  });

  // javascript lambda function to handle clapping a post
  const handleClapPost = () => {
    clapPost(postID);
  };

  // javascript lambda function to handle deleting a post
  const handleDeletePost = () => {
    deletePost(postID);
    setRedirect(true);
  };

  return (
    <Container>
      {redirect ? <Redirect to="/" /> : undefined}
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item xs={8} className={classes.sub}>
          <Grid container>
            <Grid item xs={9}>
              <Typography variant="h4">
                By: {author}{' '}
                <Clap className={classes.clap} onClick={handleClapPost} />
                {clapCount}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h5" className={classes.dateCreated}>
                {dateCreated}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.sub}>
          <Button
            fullWidth
            className={classes.deletePost}
            onClick={handleDeletePost}
          >
            Delete Post
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.content}>
          {body}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Post;
