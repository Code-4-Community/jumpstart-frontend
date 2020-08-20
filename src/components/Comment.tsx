import React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Typography
} from '@material-ui/core';

interface CommentProps {
    username: string,
    claps: number,
    content: string
}

const Comment: React.FC<CommentProps> = ({username, claps, content}) => {
    return(
        <Container>
            <Grid container>
                <Grid item xs={6}>
                    <Typography>{username}</Typography>
                    <Typography>{claps}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography></Typography>
                    <Button>Delete Comment</Button>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <Typography>{content}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Comment;