import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import {
    AppBar, //appbar is a special material ui component that is used especially for navigation
    Grid,
    Container,
    Typography,
    Button
} from '@material-ui/core';



const useStyles = makeStyles({

    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'left',
        marginBottom: '0.5rem',
        marginTop: '0.5rem'
    },
    navButtons: {
        padding: '1rem',
        paddingLeft: '3rem',
        paddingRight: '3rem',
        fontSize: '1rem',
        background: 'lightgrey'
    }
});

const NavBar: React.FC = () => {

    const classes = useStyles();

    return (
        //stick is what makes the component stay where it is on the screen regardless of scrolling
        <AppBar position="sticky" color="default" elevation={1}>
            <Container>
                <Grid container className={classes.root}>
                    <Grid item xs={6}>
                        <Typography variant="h3">The Jumpstart Blog</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Button size="large"
                            className={classes.navButtons}
                            component={Link}
                            to="/"
                            endIcon={<HomeIcon />}>Home
                    </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button size="large"
                            className={classes.navButtons}
                            component={Link}
                            to="/posts/create"
                            endIcon={<AddIcon />}>Add A Post
                    </Button>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
}

export default NavBar;