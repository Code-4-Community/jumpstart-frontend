import React from 'react';
import Container from '@material-ui/core/Container';
import Post from '../components/Post';
import ListOfComments from '../components/ListOfComments';


const BlogPost: React.FC = () => (
        <Container>
            {/*we are passing in props to the Post component to be rendered here */}
            <Post />
            <ListOfComments />
        </Container>
);

export default BlogPost;