import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.container} id='gallery'>
           <p style={{color:'white', fontSize:'2em', margin:'auto'}}>Gallery</p>
        </div>
    );
};

const useStyles = makeStyles(() => {
    return {
        container: {
            backgroundColor: '#111',
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }
    };
});

export default Home;
