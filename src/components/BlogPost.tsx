import React from 'react';
import Container from '@material-ui/core/Container';
import Post from './Post';
import ListOfComments from './ListOfComments';

interface BlogPostProps {
  title: string;
  author: string;
  content: string;
  claps: number;
  id: number;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  author,
  content,
  claps,
  id,
}) => {
  return (
    <Container>
      <Post title={title} author={author} content={content} claps={claps} />
      <ListOfComments />
    </Container>
  );
};

export default BlogPost;
