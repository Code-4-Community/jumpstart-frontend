import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Clap from '@material-ui/icons/PanToolOutlined';
import Comment from '@material-ui/icons/TextsmsOutlined'; // the comment icon
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginBottom: '2rem',
    borderStyle: 'solid',
    padding: '1rem',
  },

  author: {
    fontStyle: 'italic',
  },

  noHighlight: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

// interface for defining the type of props we are bring in
interface PostPreviewProps {
  title: string;
  author: string;
  content: string;
  comments: number;
  claps: number;
  postId: number;
}

const PostPreview: React.FC<PostPreviewProps> = (props) => {
  const classes = useStyles();

  return (
    <Container
      component={Link}
      to={`posts/${props.postId}`}
      className={classes.noHighlight}
    >
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          {/*since props is an object, we must use a dot accessor to get the data */}
          <Typography variant="h4" gutterBottom>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/*gutterBottom provides a automatic bottom margin */}
          <Typography variant="h6" gutterBottom>
            {props.content}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" className={classes.author}>
            Written By: {props.author}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            {props.comments} <Comment /> {props.claps} <Clap />{' '}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostPreview;
