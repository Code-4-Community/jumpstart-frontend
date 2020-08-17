import React from 'react';
import { Button, Box, Container, Typography } from '@material-ui/core';

interface BlogPostProps {
  title: string;
  author: string;
  content: string;
}

const Post: React.FC<BlogPostProps> = ({ title, author, content }) => {
  return (
    <Container>
      <Box>
        <Box>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="h4">{author}</Typography>
        </Box>
        <Box>
          <Button>Delete Post</Button>
        </Box>
        <Box>{content}</Box>
      </Box>
    </Container>
  );
};

export default Post;
