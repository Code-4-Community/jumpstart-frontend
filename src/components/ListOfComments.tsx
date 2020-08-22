import React, { useState } from 'react';
import Comment from './Comment';
import CreateComment from './CreateComment';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Button, Hidden } from '@material-ui/core';

const useStyles = makeStyles({
  top: {
    borderStyle: 'solid',
  },

  commentText: {
    fontSize: '19px',
    fontWeight: 'bold',
  },

  createComment: {
    background: 'lightgrey',
  },
});

const ListOfComments: React.FC = () => {
  const classes = useStyles();

  const [comments, setComments] = useState([
    {
      user: 'joe',
      date: 'Wed Aug 19 2020 20:14:06',
      claps: 4,
      content: 'Test',
    },

    {
      user: 'roy',
      date: 'Wed Aug 19 2020 20:14:06',
      claps: 25,
      content: 'hey',
    },

    {
      user: 'jim',
      date: 'Wed Aug 19 2020 20:14:06',
      claps: 94,
      content: 't',
    },
  ]);

  const [createComment, setCreateComment] = useState(true);

  const createCommentText = createComment ? 'Create Comment' : 'Cancel Comment';

  return (
    <Container>
      <Grid container>
        <Grid item xs={9} className={classes.top}>
          <Typography className={classes.commentText}>
            Comments (999999)
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.top}>
          <Button
            onClick={() => {
              setCreateComment(!createComment);
            }}
            className={classes.createComment}
            fullWidth
          >
            {createCommentText}
          </Button>
        </Grid>
        <Hidden xsUp={createComment}>
          <Grid item xs={12}>
            <CreateComment />
          </Grid>
        </Hidden>
        <Grid item xs={12}>
          {comments.map((comment) => (
            <Comment
              username={comment.user}
              date={comment.date}
              claps={comment.claps}
              content={comment.content}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListOfComments;
