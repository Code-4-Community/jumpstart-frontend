import React from 'react';
import {
    Button,
    Box,
    Container,
    Grid,
    Typography
} from '@material-ui/core';

interface BlogPostProps {
    title: string;
    author: string;
    content: string;
}

const Post: React.FC<BlogPostProps> = ({title, author, content}) => {
    return(
        <Container>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="h1">{title}</Typography>
                    <Typography variant="h4">By: {author}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button>Delete Post</Button>
                </Grid>
                <Grid item xs={12} >
                    {content}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Post;