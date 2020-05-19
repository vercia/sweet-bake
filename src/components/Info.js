import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Info = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1>Cukiernia | Pracownia Cukiernicza Przyjemniej S.C. | Koleczkowo</h1>
      </div>
      <div className={classes.right}>
        <span>
          Hmmm co to może znaczyć... dla jednych zapach kawy o poranku, dla
          innych ucieczka w góry a dla Nas..... dla Nas to pasja, ciężka praca i
          mnóstwo satysfakcji. W trakcie tworzenia tego projektu dowiedzieliśmy
          się wiele o sobie ale również tego jak wiele znaczy dla Nas
          cukiernictwo. Chcielibyśmy zaprosić Was do Naszego świata, świata w
          którym jest... Przyjemniej.
        </span>
      </div>
    </div>
  );
};
const useStyle = makeStyles({
  container: {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin: 'auto',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      width: '90%'
    },
    '@media (min-width:1024px)': {
      width: '80%',
      flexDirection: 'row'
    },
    '@media (min-width:1440px)': {
      width: '75%',
      height: '35vh'
    }
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    color: '#c5a645',
    fontSize: '0.8em',
    marginTop: '-10%',
    '@media (min-width: 768px)': {
      marginTop: '0%',
      fontSize: '1.1em'
    },
    '@media (min-width:1024px)': {
      width: '55%'
    },
    '@media (min-width:1440px)': {
      width: '50%'
    }
  },
  right: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    color: 'white',
    fontSize: '1em',
    marginTop: '-2%',
    '@media (min-width: 768px)': {
      top: '10%'
    },
    '@media (min-width:1024px)': {
      width: '80%',
      left: '3%'
    },
    '@media (min-width:1440px)': {
      width: '70%',
      fontSize: '1.2em'
    }
  }
});
export default Info;
