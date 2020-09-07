import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; //this allows use to use custom styles in our components
import Clap from '@material-ui/icons/PanToolOutlined'; //imported clap icon from material ui
import {
    Box, //basically a div tag but in material ui; serves as a wrapper component 
    Button, //same as button tag but with more functionality 
    Container, //centers your content horizontally
    Grid, //creates a responsive and adaptive layout
    Typography //basically cool styled text
} from '@material-ui/core';

//creates a makeshift style sheet that can be used with any element;
const useStyles = makeStyles({

    root: {
        borderStyle: 'solid',
        marginBottom: '1rem',
    },
    date: {
        float: 'left',
        textAlign: 'left',
        fontSize: '18px',
        marginTop: '0.25rem',
    },
    content: {
        marginTop: '0.75rem'
    },
    deleteComment: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
        float: 'right',
        textAlign: 'right',
        background: 'lightgrey'
    },
    clap: {
        '&:hover': {
            opacity: 0.5
          },
    }

});

//this is interface is used to declare prop types
interface CommentProps {
    username: string;
    date: string;
    claps: number;
    content: string;
}

//the function that holds all of our JSX which we export
const Comment: React.FC<CommentProps> = (props) => {

    //this allows use to access the styles that were defined above
    const classes = useStyles();

    const handleClap = () => {
        alert('clapped');
    }

    return(
        <Container>
                  {/*container is what contains grid items*/}
            <Grid container className={classes.root}>
                      {/*a grid item that takes up 7/12 of the grid size*/}
                <Grid item xs={7}>
                                {/*varient is the type of text used (ei. h1,h2,h3...p,subtitle,body) */}
                    <Typography variant="h6">{props.username} <Clap className={classes.clap} onClick={handleClap}/>  {props.claps}</Typography>
                </Grid>
                      {/*a grid item that takes up 5/12 of the grid size*/}
                <Grid item xs={5}>
                    <Typography className={classes.date}>{props.date}</Typography>
                    <Button className={classes.deleteComment}>Delete Comment</Button>
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <Box>
                        <Typography>{props.content}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Comment;