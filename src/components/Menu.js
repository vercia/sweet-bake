import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Info from './Info';
import CardItem from './CardItem';
import { CardActions } from '@material-ui/core';

const Menu = () => {
  const classes = useStyles();

  const cards = [
    {
      title: 'Cakes'
    },
    {
      title: 'Cookies'
    },
    {
      title: 'Cupcakes'
    }
  ];

  return (
    <div className={classes.container} id='menu'>
      <Info />
      <div className={classes.cardsMenu}>
        {cards.map((item) => {
          return (
            <CardItem title={item.title} image={item.image} key={item.title} />
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
      display: 'flex',
      flexDirection: 'row',
      width: '75%',
      height: '50vh',
      margin: 'auto'
    }
  };
});

export default Menu;
