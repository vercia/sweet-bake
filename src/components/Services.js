import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id='services'>
      <h1 className={classes.title}>Nasze usługi</h1>
      <div className={classes.icons}>
        <div className={classes.service}>
          <i class='fas fa-birthday-cake' />
          <p className={classes.titleDesc}>Torty na każdą okazję</p>
          <p className={classes.desc}>
            Upieczemy dla Państwa tort na dowolną okazję: ślub, urodziny,
            imieniny, komunia, chrzciny, święta, spotkanie towarzyskie lub
            biznesowe..
          </p>
        </div>
        <div className={classes.service}>
          <i class='fas fa-truck' />
          <p className={classes.titleDesc}>Dostawa</p>
          <p className={classes.desc}>
            Państwa zamówienie dostarczymy w każde miejsce na terenie
            Trójmiasta.
          </p>
        </div>
        <div className={classes.service}>
          <i class='fas fa-heart' />
          <p className={classes.titleDesc}>Indywidualne zamówienie</p>
          <p className={classes.desc}>
            Pieczemy również na życzenie. Od Państwa zależy jaki tort ma mieć smak czy
            wygląd
          </p>
        </div>
        <div className={classes.service}>
          <i class='fas fa-parking' />
          <p className={classes.titleDesc}>Miejsce parkingowe</p>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            finibus.
          </p>
        </div>
        <div className={classes.service}>
          <i class='fas fa-glass-cheers' />
          <p className={classes.titleDesc}>Imprezy prywatne</p>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            finibus.
          </p>
        </div>
        <div className={classes.service}>
          <i class='fas fa-shopping-bag' />
          <p className={classes.titleDesc}>Na wynos</p>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            finibus.
          </p>
        </div>
      </div>
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
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      fontSize: '2.7em',
      marginTop: '3%',
      color: '#c5a645'
    },
    icons: {
      display: 'grid',
      gridTemplateColumns: '30% 30% 30%',
      justifyContent: 'space-around',
      width: '90%',
      height: '50vh',
      margin: 'auto',
      marginTop: 10
    },
    service: {
      padding:'10px 0px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
    titleDesc: {
      fontSize: '1.4em',
      color: '#c5a645',
      margin:"15px auto"
    },
    desc: {
      color: 'white',
      fontSize: '1.2em',
      margin: "10px auto"
    }
  };
});

export default Home;
