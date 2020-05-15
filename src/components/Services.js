import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id='services'>
      <h1 className={classes.title}>Nasze usługi</h1>
      <div className={classes.icons}>
        <div className={classes.service}>
          <i class='fas fa-truck' />
          <p className={classes.desc}>Dostawa</p>
        </div>
        <div className={classes.service}>
          <i class='fas fa-parking'></i>
          <p className={classes.desc}>Miejsce parkingowe</p>
        </div>
        <div className={classes.service}>
          <i class='fas fa-glass-cheers'></i>
          <p className={classes.desc}>Imprezy prywatne</p>
        </div>
        <div className={classes.service}>
          <i class='fas fa-shopping-bag'></i>
          <p className={classes.desc}>Na wynos</p>
        </div>
        <div className={classes.service}>
          <i class='fas fa-ring'></i>
          <p className={classes.desc}>Przyjęcia weselne</p>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    container: {
      backgroundColor: 'blue',
      width: '100%',
      height: '40vh',
      display: 'flex',
      margin: 'auto'
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      fontSize: '3em'
    },
    icons: {
      backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      height: '40vh',
      flexDirection: 'column'
    },
    service: {
      backgroundColor: 'orange',
      display: 'grid',
      marginLeft: '10px',
      gridTemplateColumns: '20% 35%'
    },
    desc: {
      fontSize: '1.2em',
      textAlign: 'left'
    }
  };
});

export default Home;
