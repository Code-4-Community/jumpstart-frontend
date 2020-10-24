import React from 'react';
import Container from '@material-ui/core/Container';
import Post from '../components/Post';
import ListOfComments from '../components/ListOfComments';

// interface that defines the prop types we take in
interface BlogPostProps {
  title: string;
  author: string;
  content: string;
  claps: number;
  id: number;
}

const BlogPost: React.FC<BlogPostProps> = (props) => (
  <Container>
    {/*we are passing in props to the Post component to be rendered here */}
    <Post
      title={props.title}
      author={props.author}
      content={props.content}
      claps={props.claps}
    />
    <ListOfComments />
  </Container>
);

export default BlogPost;
