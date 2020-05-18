import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Home = (props) => {
  const classes = useStyles();

  return (
      <div className={classes.service}>
        {props.icon}
        <p className={classes.titleDesc}>{props.title}</p>
        <p className={classes.desc}>
          {props.description}
        </p>
      </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    service: {
      padding: '10px 0px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    },
    titleDesc: {
      fontSize: '1.4em',
      color: '#c5a645',
      margin: '15px auto'
    },
    desc: {
      color: 'white',
      fontSize: '1.2em',
      margin: '10px auto'
    }
  };
});

export default Home;
