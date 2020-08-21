import React from 'react';
import SideBar from './SideBar';
import PostPreview from './PostPreview';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

const posts = [
  {
    title: 'My First Post',
    author: 'Max Sebso',
    postPreview:
      'test test test tes test test test test este stes test setest stets',
    comments: 7,
    claps: 192,
    id: 1,
  },

  {
    title: 'My First Post',
    author: 'Max Sebso',
    postPreview:
      'test test test tes test test test test este stes test setest stets',
    comments: 7,
    claps: 192,
    id: 2,
  },

  {
    title: 'My First Post',
    author: 'Max Sebso',
    postPreview:
      'test test test tes test test test test este stes test setest stets',
    comments: 7,
    claps: 192,
    id: 3,
  },
];

const useStyles = makeStyles({
  postPrev: {
    marginTop: '4.5rem',
  },
});

const Landing: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10} className={classes.postPrev}>
          {posts.map((post) => (
            <PostPreview
              title={post.title}
              author={post.author}
              content={post.postPreview}
              comments={post.comments}
              claps={post.claps}
              postId={post.id}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
