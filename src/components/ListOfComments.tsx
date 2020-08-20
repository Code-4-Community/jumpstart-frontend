import React, { useState } from 'react';
import Comment from './Comment';
import {
    Container, 
    Typography,
    Grid,
    Button
} from '@material-ui/core';

const [comments,setComments] = useState([
    {
        user: 'joe',
        claps: 4,
        content: 'Test'
    },

    {
        user: 'roy',
        claps: 25,
        content: 'hey'
    },

    {
        user: 'jim',
        claps: 94,
        content: 't'
    }
]);

const ListOfComments: React.FC = () => {
    return(
        <Container>
            <Grid container>
                <Grid item xs={6} >
                    <Typography>Comments (999999)</Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography>Date</Typography>
                    <Button>Create Comment</Button>
                </Grid>
                <Grid item xs={12} >
                    {comments.map(comment => (
                        <Comment username={comment.user} claps={comment.claps} content={comment.content} />
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default ListOfComments;