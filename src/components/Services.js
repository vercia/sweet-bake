import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Service from './Service';

const Home = () => {
  const classes = useStyles();

  const services = [
    {
      icon: <i class='fas fa-birthday-cake' />,
      title: 'Torty na każdą okazję',
      description:
        'Upieczemy dla Państwa tort na dowolną okazję: ślub, urodziny, imieniny, komunia, chrzciny, święta, spotkanie towarzyskie lub biznesowe..'
    },
    {
      icon: <i class='fas fa-truck' />,
      title: 'Dostawa',
      description:
        'Państwa zamówienie dostarczymy w każde miejsce na terenie Trójmiasta.'
    },
    {
      icon: <i class='fas fa-heart' />,
      title: 'Indywidualne zamówienie',
      description:
        'Pieczemy również na życzenie. Od Państwa zależy jaki tort ma mieć smak czy wygląd.'
    },
    {
      icon: <i class='fas fa-parking' />,
      title: 'Miejsce parkingowe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus.'
    },
    {
      icon: <i class='fas fa-glass-cheers' />,
      title: 'Imprezy prywatne',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus.'
    },
    {
      icon: <i class='fas fa-shopping-bag' />,
      title: 'Na wynos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus.'
    }
  ];

  return (
    <div className={classes.container} id='services'>
      <h1 className={classes.title}>Nasze usługi</h1>
      <div className={classes.icons}>
        {services.map((item) => {
          return (
            <Service
              icon={item.icon}
              title={item.title}
              description={item.description}
              key={item.key}
            />
          );
        })}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    container: {
      backgroundColor: '#111',
      width: '100%',
      height: '138vh',
      display: 'flex',
      flexDirection: 'column',
      '@media (min-width: 768px)': {
        height: '100vh'
      }
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      fontSize: '2.2em',
      marginTop: '3%',
      color: '#c5a645',
      '@media (min-width: 768px)': {
        marginTop: '8%'
      },
      '@media (min-width:1024px)': {
        fontSize: '2.5em',
        marginTop: '5%'
      }
    },
    icons: {
      display: 'grid',
      gridTemplateRows: 'auto auto auto',
      justifyContent: 'space-around',
      width: '95%',
      margin: 'auto',
      marginTop: '-5%',
      '@media (min-width: 768px)': {
        gridTemplateColumns: '30% 30% 30%',
        width: '90%',
        height: '50vh',
        marginTop: '4%'
      },
      '@media (min-width:1024px)': {
        marginTop: '0%'
      }
    }
  };
});

export default Home;
