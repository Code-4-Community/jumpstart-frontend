import React, { useState } from 'react';
import Comment from './Comment'; //importing a component we already made to be displayed here
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Typography,
    Grid,
    TextField,
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
    root: {
        marginTop: '2rem',
        marginBottom: '2rem',
        borderStyle: 'solid'
    },
    author: {
        width: '100%',
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    actionButton: {
        marginTop: '2rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    submitButton: {
        padding: '0.75rem',
        paddingLeft: '7rem',
        paddingRight: '7rem',
        background: 'lightGreen'
    },
    listOfComments: {
        marginTop: '1rem',
        marginBottom: '2rem'
    }
});


const ListOfComments: React.FC = () => {

    const classes = useStyles();

    //allows us to keep track of the author of the comment that is being created
    const [author, setAuthor] = useState('');

    //allows us to keep track of the author of the comment that is being created
    const [content, setContent] = useState('');

    //this JS lambda function holds a callback function for updating the content in a comment
    const handleSubmitPost = () => {
        setCreatingComment(true);
        setAuthor('');
        setContent('');
    }

    //this JS lambda function holds a callback function for updating the content in a comment
    const handleChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setContent(event.target.value);
    }

    //this JS lambda function holds a callback function for updating the author in a comment
    const handleChangeAuthor = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setAuthor(event.target.value);
    }

    //keeps track if a user is currently creating a comment or if the user is not 
    //if true then comment form will be hidden, if false then comment form will be displayed
    const [creatingComment, setCreatingComment] = useState(true);

    //changes value depending upon if we are currently creating a comment or not
    //so that the user is informed
    let creatingCommentText: string = (creatingComment ? "Create Comment" : "Cancel Comment");

    return (
        <Container>
            <Grid container>
                {/*if we should redirect then we should redirect to / (landing page) else then we should do nothing */}
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
                        <form onSubmit={handleSubmitPost}>
                            <Grid container>
                                <Grid item xs={12}>
                                    {/*all the defined props can be found at TextField API in material ui: https://material-ui.com/api/text-field/*/}
                                    <TextField
                                        id="content"
                                        margin="normal"
                                        fullWidth
                                        multiline
                                        rows={8}
                                        rowsMax={50}
                                        label="Comment"
                                        variant="outlined"
                                        value={content}
                                        onChange={handleChangeContent} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="author"
                                        margin="normal"
                                        rowsMax={1}
                                        label="Author"
                                        variant="outlined"
                                        value={author}
                                        className={classes.author}
                                        onChange={handleChangeAuthor} />
                                </Grid>
                                <Grid item xs={6} className={classes.actionButton}>
                                    <Button variant="outlined" className={classes.submitButton} type="submit">Post</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Hidden>
                {/*the function map runs through the array it is called on and applies the callback 
                   function to each element in the array given*/}
                <Grid item xs={12} className={classes.listOfComments}>
                    {comments.map(comment => (
                        <Comment username={comment.user} date={comment.date} claps={comment.claps} content={comment.content} />
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default ListOfComments;