import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Info from './Info';
import CardItem from './CardItem';
import infoCards from './infoCards'

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
              titleDesc={item.titleDesc}
              options={item.options}
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
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    cardsMenu: {
      height: '49%',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '25% 25% 25% 25%',
      gridColumnGap: 0
    }
  };
});

export default Menu;
