import React, { useState } from 'react';
import Comment from './Comment'; //importing a component we already made to be displayed here
import CreatingComment from './CreateComment'; //importing a component we already made to be displayed here
import { makeStyles } from '@material-ui/core/styles'
import {
    Container,
    Typography,
    Grid,
    Button,
    Hidden //what ever content is wrapped in this component will be hidden if defined so in the prop value
} from '@material-ui/core';
import comments from '../store/Comments'; //accessing the comment data in the store


const useStyles = makeStyles({

    top: {
        borderStyle: 'solid'
    },
    commentText: {
        fontSize: '19px',
        fontWeight: 'bold'
    },
    creatingComment: {
        background: 'lightgrey'
    },


});


const ListOfComments: React.FC = () => {

    const classes = useStyles();

    //keeps track if a user is currently creating a comment or if the user is not 
    const [creatingComment, setCreatingComment] = useState(true);

    //changes value depending upon if we are currently creating a comment or not
    //so that the user is informed
    let creatingCommentText: string = (creatingComment ? "Create Comment" : "Cancel Comment");

    return (
        <Container>
            <Grid container>
                <Grid item xs={9} className={classes.top}>
                    <Typography className={classes.commentText}>Comments ({comments.length})</Typography>
                </Grid>
                <Grid item xs={3} className={classes.top}>
                    {/*onClick calls a function and executes it once the button is clicked 
                       Here we are setting creatingComment to the opposite of what it currently is */}
                    {/*if fullWidth then the component will take up the full width of its container*/}
                    <Button
                        onClick={() => { setCreatingComment(!creatingComment) }}
                        className={classes.creatingComment}
                        fullWidth>{creatingCommentText}
                    </Button>
                </Grid>
                <Hidden xsUp={creatingComment}>
                    <Grid item xs={12}>
                        <CreatingComment />
                    </Grid>
                </Hidden>
                {/*the function map runs through the array it is called on and applies the callback 
                   function to each element in the array given*/}
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