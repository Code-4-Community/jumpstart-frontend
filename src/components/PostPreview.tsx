import React from 'react';
import Comment from '@material-ui/icons/CommentOutlined';
import Clap from '@material-ui/icons/PanToolOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { send } from 'process';

const useStyles = makeStyles({
  root: {
    marginBottom: '2rem',
    borderStyle: 'solid',
    padding: '1rem',
  },
  author: {
    fontStyle: 'italic',
  },
});

interface PostPreviewProps {
  title: string;
  author: string;
  content: string;
  comments: number;
  claps: number;
  postId: number;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  author,
  content,
  comments,
  claps,
  postId,
}) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            {content}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" className={classes.author}>
            Written By: {author}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            {comments}{' '}
            <Box component="span" fontSize="24px">
              💬
            </Box>{' '}
            {claps}{' '}
            <Box component="span" fontSize="24px">
              👏
            </Box>{' '}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostPreview;
