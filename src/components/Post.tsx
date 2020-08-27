import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Clap from '@material-ui/icons/PanToolOutlined'; //the clap icon
import {
    Button,
    Container,
    Grid,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({

    root: {
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    title: {
        marginBottom: '.5rem',
        borderStyle: 'solid'
    },
    sub: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1.25rem',
        borderStyle: 'solid'
    },
    deletePost: {
        padding: '0.5rem',
        background: 'lightgrey'
    },
    content: {
        borderStyle: 'solid',
        marginButton: '1rem'
    }

});

//interface that defines the type of props we will take in
interface BlogPostProps {
    title: string;
    author: string;
    content: string;
    claps: number;
}

const Post: React.FC<BlogPostProps> = (props) => {

    const classes = useStyles();

    return(
        <Container>
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant="h2">{props.title}</Typography>
                </Grid>
                <Grid item xs={8} className={classes.sub}>
                    <Typography variant="h4">By: {props.author}  <Clap />{props.claps}</Typography>
                </Grid>
                <Grid item xs={4} className={classes.sub}>
                    <Button fullWidth className={classes.deletePost}>Delete Post</Button>
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    {props.content}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Post;