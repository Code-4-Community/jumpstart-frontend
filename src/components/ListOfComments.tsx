import React from 'react';
import Comment from './Comment';
import { makeStyles } from '@material-ui/core/styles'
import {
    Container, 
    Typography,
    Grid,
    Button
} from '@material-ui/core';


const useStyles = makeStyles({
    top: {
        borderStyle: 'solid'
    },

    commentText: {
        fontSize: '19px',
        fontWeight: 'bold'
    },

    createComment: {
        background: 'lightgrey'
    },


});


const ListOfComments: React.FC = () => {
    const classes = useStyles();

    const comments = [
        {
            user: 'joe',
            date: 'Wed Aug 19 2020 20:14:06',
            claps: 4,
            content: 'Test'
        },
    
        {
            user: 'roy',
            date: 'Wed Aug 19 2020 20:14:06',
            claps: 25,
            content: 'hey'
        },
    
        {
            user: 'jim',
            date: 'Wed Aug 19 2020 20:14:06',
            claps: 94,
            content: 't'
        }
    ];

    return(
        <Container>
            <Grid container>
                <Grid item xs={9} className={classes.top}>
                    <Typography className={classes.commentText}>Comments (999999)</Typography>
                </Grid>
                <Grid item xs={3} className={classes.top}>
                    <Button className={classes.createComment} fullWidth>Create Comment</Button>
                </Grid>
                <Grid item xs={12}>
                    {comments.map(comment => (
                        <Comment username={comment.user} date={comment.date} claps={comment.claps} content={comment.content} />
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default ListOfComments;