import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundOne from '../images/background.jpg';
import backgroundTwo from '../images/background1.jpg';
import backgroundThree from '../images/background3.jpg';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Home = () => {
  const classes = useStyles();
  const content = [
    {
      title: 'Vulputate Mollis Ultricies Fermentum Parturient',
      description:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
      button: 'Read More',
      image: `${backgroundOne}`
    },
    {
      title: 'Tortor Dapibus Commodo Aenean Quam',
      description:
        'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
      button: 'Discover',
      image: `${backgroundTwo}`
    },
    {
      title: 'Phasellus volutpat metus',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      button: 'Buy now',
      image: `${backgroundThree}`
    }
  ];

  return (
    <div className={classes.container} id='home'>
      <Slider className='slider-wrapper' autoplay={4000}>
        {content.map((item, index) => (
          <div
            key={index}
            className='slider-content'
            style={{
              background: `url('${item.image}') no-repeat center`,
              backgroundSize:'100vh',
              height:'100vh'
            }}
          >
            <div className='inner'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
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
      // backgroundColor: 'yellow',
      width: '100%',
      height: '100vh',
      // display: 'flex'
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
