import React from 'react';
import SideBar from '../components/SideBar';
import PostPreview from '../components/PostPreview';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid
} from '@material-ui/core';
import posts from '../store/Posts'; //access the post data in store

const useStyles = makeStyles({

    postPrev: {
        marginTop: '4.5rem'
    }
});


const Landing: React.FC = () => {

    const classes = useStyles();

    return (
        <Container>
            <Grid container>
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={10} className={classes.postPrev}>
                    {posts.map(post => (
                        <PostPreview
                            title={post.title}
                            author={post.author}
                            content={post.postPreview}
                            comments={post.comments}
                            claps={post.claps}
                            postId={post.id} />
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Landing;