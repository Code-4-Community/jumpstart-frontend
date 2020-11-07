import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Box,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { createPost } from '../api/api';
import { CreatePost } from '../Types';

const useStyles = makeStyles({
  root: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  title: {
    textAlign: 'center',
  },
  input: {
    justifyItems: 'left',
    margin: '2rem',
  },
  author: {
    width: '40%',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  actionButton: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cancelButton: {
    padding: '3rem',
    background: 'red',
  },
  submitButton: {
    padding: '3rem',
    paddingLeft: '3.75rem',
    paddingRight: '3.75rem',
    background: 'lightGreen',
  },
  textfield: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
});

const CreateBlogPost: React.FC = () => {
  const classes = useStyles();

  // allows us to keep track of the post that is being created
  const [title, setTitle] = useState('');

  // allows us to keep track of the post that is being created
  const [author, setAuthor] = useState('');

  // allows us to keep track of the post that is being created
  const [body, setBody] = useState('');

  // allows us to keep track of if we have submitted or not
  const [redirect, setRedirect] = useState(false);

  // this JS lambda function holds a callback function for updating the post when the form is submitted
  const handleSubmit = () => {
    const post: CreatePost = {
      title,
      author,
      body,
    };
    createPost(post);
    setRedirect(true);
  };

  // this JS lambda function holds a callback function for redirected the post when it is cancelled
  const handleCancel = () => {
    setRedirect(true);
  };

  // this JS lambda function holds a callback function for updating the title in a post
  const handleChangeTitle = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  // this JS lambda function holds a callback function for updating the author in a post
  const handleChangeAuthor = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    event.preventDefault();
    setAuthor(event.target.value);
  };

  // this JS lambda function holds a callback function for updating the body in a post
  const handleChangeBody = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    event.preventDefault();
    setBody(event.target.value);
  };

  return (
    <Container className={classes.root}>
      {/*if we should redirect then we should redirect to / (landing page) else then we should do nothing */}
      {redirect ? <Redirect to="/" /> : undefined}
      <Typography variant="h2" className={classes.title}>
        Create A Blog Post
      </Typography>
      {/* wrapping in a form tag allows us to use onSubmit */}
      <form onSubmit={handleSubmit}>
        <Box className={classes.input}>
          <TextField
            id="title"
            margin="normal"
            fullWidth
            multiline
            rowsMax={2}
            label="Title"
            variant="outlined"
            className={classes.textfield}
            value={title}
            onChange={handleChangeTitle}
          />
          <TextField
            id="author"
            margin="normal"
            label="Author"
            variant="outlined"
            className={classes.author}
            value={author}
            onChange={handleChangeAuthor}
          />
          <TextField
            id="body"
            margin="normal"
            fullWidth
            multiline
            rows={8}
            rowsMax={150}
            label="Content"
            variant="outlined"
            className={classes.textfield}
            value={body}
            onChange={handleChangeBody}
          />
        </Box>
        <Box className={classes.actionButton}>
          <Button
            variant="outlined"
            className={classes.cancelButton}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            type="submit"
            className={classes.submitButton}
          >
            Post
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreateBlogPost;
