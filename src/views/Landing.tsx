import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import PostPreview from '../components/PostPreview';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid
} from '@material-ui/core';
import { Post } from '../Types'; //access the post typing 
import { getAllPosts } from '../api/api';

const useStyles = makeStyles({

    postPrev: {
        marginTop: '4.5rem'
    }
});


const Landing: React.FC = () => {

    const classes = useStyles();

    //allows us to keep track of posts
    const [posts, setPosts] = useState<Post[]>([]);

    //GET call to posts in backend
    useEffect(()=>{
        getAllPosts().then((p: Post[])=>{
            setPosts(p);
        })
    },[])

    return (
        <Container>
            <Grid container>
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={10} className={classes.postPrev}>
                    {posts.map(post => (
                        <PostPreview
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            content={post.preview}
                            comments={post.commentCount}
                            claps={post.clapCount}
                            postId={post.id} />
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Landing;