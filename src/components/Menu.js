import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Info from './Info';
import CardItem from './CardItem';
import infoCards from './infoCards';

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id='menu'>
      <Info />
      <div className={classes.cardsMenu}>
        {infoCards.map((item) => {
          return (
            <CardItem
              title={item.title}
              image={item.image}
              spanOne={item.spanOne}
              spanTwo={item.spanTwo}
              titleDesc={item.titleDesc}
              titleDescTwo={item.titleDescTwo}
              titleDescThree={item.titleDescThree}
              options={item.options}
              optionsTwo={item.optionsTwo}
              optionsThree={item.optionsThree}
              key={item.title}
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
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    cardsMenu: {
      height: '30%',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '25% 25% 25% 25%',
      gridColumnGap: 0,
      '@media (min-width: 768px)': {
        height: '45%'
      },
      '@media (min-width:1024px)': {
        height: '50%'
      }
    }
  };
});

export default Menu;
