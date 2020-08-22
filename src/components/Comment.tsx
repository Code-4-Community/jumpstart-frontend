import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
  },

  date: {
    float: 'left',
    textAlign: 'left',
    fontSize: '18px',
    marginTop: '0.25rem',
  },

  content: {
    marginTop: '0.75rem',
  },

  deleteComment: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    float: 'right',
    textAlign: 'right',
    background: 'lightgrey',
  },
});

interface CommentProps {
  username: string;
  date: string;
  claps: number;
  content: string;
}

const Comment: React.FC<CommentProps> = ({
  username,
  date,
  claps,
  content,
}) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={7}>
          <Typography variant="h6">
            {username}{' '}
            <Box component="span" fontSize="24px">
              👏
            </Box>{' '}
            {claps}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography className={classes.date}>{date}</Typography>
          <Button className={classes.deleteComment}>Delete Comment</Button>
        </Grid>
        <Grid item xs={12} className={classes.content}>
          <Box>
            <Typography>{content}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Comment;
