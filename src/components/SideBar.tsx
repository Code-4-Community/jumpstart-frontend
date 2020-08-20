import React from 'react'
import {
    Container, Typography, Box, Button
} from '@material-ui/core'


const SideBar:React.FC = () => {
    return(
        <Container>
            <Box>
                <Typography>
                    Welcome to the C4C Jumpstart Blog! 
                    Feel free to checkout the recent post 
                    and contribute to our post collection.
                </Typography>
            </Box>
            <Box>
                <Typography>Search By:</Typography>
                <Button>Likes</Button>
                <Button>Recent</Button>
                <Button>Longest</Button>
                <Button>Featured</Button>
            </Box>
        </Container>
    );
}


export default SideBar;