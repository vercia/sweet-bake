import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Swiper from 'react-id-swiper';
import backgroundOne from '../images/background.jpg';
import backgroundTwo from '../images/background1.jpg';
import backgroundThree from '../images/background3.jpg';
import Paper from '@material-ui/core/Paper';

const Home = () => {
  const classes = useStyles();
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  return (
    <div className={classes.container} id='home'>
      <div className={classes.swipeContainer}>
        <Swiper {...params}>
          <div>
            <Paper
              className={classes.paper}
              style={{
                backgroundImage: `url(${backgroundOne})`
              }}
            >
              {/* <div>
                <h1 class='animate'>An animated element</h1>
              </div> */}
            </Paper>
          </div>
          <div>
            <Paper
              className={classes.paper}
              style={{
                backgroundImage: `url(${backgroundTwo})`
              }}
            ></Paper>
          </div>
          <div>
            <Paper
              className={classes.paper}
              style={{
                backgroundImage: `url(${backgroundThree})`
              }}
            ></Paper>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    paper: {
      backgroundPosition: 'center 85%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      color: 'white',
      width: '80vw',
      height: '80vh',
      margin: 'auto'
    },
    container: {
      backgroundColor: 'yellow',
      width: '100%',
      height: '100vh',
      display: 'flex'
    },
    swipeContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }
  };
});

export default Home;
