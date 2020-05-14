import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Swiper from 'react-id-swiper';

const Home = () => {
    const classes = useStyles()
    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

  return (
      <div className={classes.container} id='home'>
          {/* <Swiper {...params}>
              <div>Slide #1</div>
              <div>Slide #2</div>
              <div>Slide #3</div>
              <div>Slide #4</div>
              <div>Slide #5</div>
          </Swiper> */}
    </div>
    );
};

const useStyles = makeStyles(() => {
    return {
        container: {
            backgroundColor: 'yellow',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center'
        }
    };
});

export default Home;
