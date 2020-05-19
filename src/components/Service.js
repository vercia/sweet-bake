import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Home = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.service}>
      {props.icon}
      <p className={classes.titleDesc}>{props.title}</p>
      <p className={classes.desc}>{props.description}</p>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    service: {
      padding: '5px 0px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      '@media (min-width: 768px)': {
        padding: '10px 0px'
      }
    },
    titleDesc: {
      fontSize: '1.2em',
      color: '#c5a645',
      margin: '10px auto',
      '@media (min-width: 768px)': {
        margin: '15px auto'
      },
      '@media (min-width:1024px)': {
        fontSize: '1.4em'
      }
    },
    desc: {
      color: 'white',
      fontSize: '1em',
      margin: '0px auto',
      '@media (min-width: 768px)': {
        margin: '10px auto'
      },
      '@media (min-width:1024px)': {
        fontSize: '1.2em'
      }
    }
  };
});

export default Home;
