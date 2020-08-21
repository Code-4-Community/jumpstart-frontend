import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Box,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

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

  const [post, setPost] = useState({
    title: '',
    author: '',
    content: '',
  });

  const handleSubmit = () => {
    alert(
      'Title of the Post: ' +
        post.title +
        '\n' +
        'Author of the Post: ' +
        post.author +
        '\n' +
        'Content of the Post: ' +
        post.content,
    );
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Create A Blog Post
      </Typography>
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
            value={post.title}
            onChange={(e) => {
              const newPostObj = {
                title: e.target.value,
                author: post.author,
                content: post.content,
              };
              setPost(newPostObj);
            }}
          />
          <TextField
            id="author"
            margin="normal"
            label="Author"
            variant="outlined"
            className={classes.author}
            value={post.author}
            onChange={(e) => {
              const newPostObj = {
                title: post.title,
                author: e.target.value,
                content: post.content,
              };
              setPost(newPostObj);
            }}
          />
          <TextField
            id="content"
            margin="normal"
            fullWidth
            multiline
            rows={8}
            label="Content"
            variant="outlined"
            className={classes.textfield}
            value={post.content}
            onChange={(e) => {
              const newPostObj = {
                title: post.title,
                author: post.author,
                content: e.target.value,
              };
              setPost(newPostObj);
            }}
          />
          <TextField
            id="preview"
            margin="normal"
            fullWidth
            multiline
            disabled
            rows={8}
            rowsMax={100}
            label="Preview"
            variant="outlined"
            className={classes.textfield}
          />
        </Box>
        <Box className={classes.actionButton}>
          <Button variant="outlined" className={classes.cancelButton}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            type="submit"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreateBlogPost;
