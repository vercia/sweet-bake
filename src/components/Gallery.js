import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import images from './images';

const Gallery = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id='gallery'>
      <h1 className={classes.title}>Galeria</h1>
      <ImageGallery
        items={images}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={4000}
        slideDuration={1500}
        preventDefaultTouchmoveEvent={true}
      />
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    container: {
      backgroundColor: '#111',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
      color: '#c5a645',
      fontSize: '2.2em',
      justifyContent: 'center',
      display: 'flex',
      margin: '40px auto',
      '@media (min-width: 1024px)': {
        fontSize:'2.5em'
      }
    }
  };
});

export default Gallery;
