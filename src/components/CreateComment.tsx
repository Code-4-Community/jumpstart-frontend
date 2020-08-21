import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Container, 
    TextField, 
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
        width: '40%',
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
    
    cancelButton: {
        padding: '1.5rem',
        paddingLeft: '6rem',
        paddingRight: '6rem',
        background: 'red'

    },

    submitButton: {
        padding: '1.5rem',
        paddingLeft: '7rem',
        paddingRight: '7rem',
        background: 'lightGreen'
    }, 
});


const CreateComment: React.FC = () => {
    const classes = useStyles();

    const [comment, setComment] = useState(
        {
            author: '',
            content: ''
        }
    );

    return(
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField                         
                        id="content"
                        margin="normal"
                        fullWidth
                        multiline
                        rows={8}
                        rowsMax={50}
                        label="Comment"
                        variant="outlined"
                        value={comment.content}
                        onChange={e => {
                            const newCommentObj = { author: comment.author, 
                                                    content: e.target.value};
                            setComment(newCommentObj);
                          }}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField                         
                        id="author"
                        margin="normal"
                        rowsMax={1}
                        label="Author"
                        variant="outlined"
                        value={comment.author}
                        className={classes.author}
                        onChange={e => {
                            const newCommentObj = { author: e.target.value, 
                                                    content: comment.content};
                            setComment(newCommentObj);
                          }}/>
                </Grid>
                <Grid item xs={6} className={classes.actionButton}>
                    <Button variant="outlined" className={classes.cancelButton}>Cancel</Button>
                </Grid>
                <Grid item xs={6} className={classes.actionButton}>
                    <Button variant="outlined" className={classes.submitButton}>Post</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CreateComment;