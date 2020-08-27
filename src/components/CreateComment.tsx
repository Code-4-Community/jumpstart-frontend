import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    TextField, //this material ui component is most similar to an input tag, 
               //basically it allows a user to input text in an area
    Grid,
    Button
} from '@material-ui/core';

const useStyles = makeStyles({

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
});


const CreateComment: React.FC = () => {

    const classes = useStyles();

    //allows us to keep track of the author of the comment that is being created
    const [author, setAuthor] = useState('');

    //allows us to keep track of the author of the comment that is being created
    const [content, setContent] = useState('');

    //this JS lambda function holds a callback function for updating the content in a comment
    const handleChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setContent(event.target.value);
    }

    //this JS lambda function holds a callback function for updating the author in a comment
    const handleChangeAuthor = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setAuthor(event.target.value);
    }

    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    {/*all the defined props can be found at 
                       TextField API in material ui: https://material-ui.com/api/text-field/*/}
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
                    <Button variant="outlined" className={classes.submitButton}>Post</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CreateComment;