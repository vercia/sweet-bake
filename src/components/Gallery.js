import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import images from './images';

const Gallery = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id='gallery'>
      <ImageGallery
        items={images}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={4000}
        slideDuration={1500}
        disableSwipe={true}
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
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center'
    }
  };
});

export default Gallery;
