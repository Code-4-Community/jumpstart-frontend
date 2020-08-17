import React from 'react';
import Container from '@material-ui/core/Container';
import Post from './Post';
import ListOfComments from './ListOfComments';

interface BlogPostProps {
    title: string;
    author: string;
    content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({title, author, content}) => {
    return(
        <Container>
            <Post title={title} author={author} content={content}/>
            <ListOfComments />
        </Container>
    );
}

export default BlogPost;