import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Info from './Info';
import CardItem from './CardItem';
import bake1 from "../images/bake8.jpg";
import bake2 from '../images/bake3.jpg';
import bake3 from '../images/bake4.jpg';
import bake4 from '../images/bake6.jpg';


const Menu = () => {
  const classes = useStyles();

  const cards = [
    {
      title: 'Cakes',
      image:bake1
    },
    {
      title: 'Cookies',
      image:bake2
    },
    {
      title: 'Cupcakes',
      image:bake3
    },
    {
      title: 'Costam',
      image:bake4
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
      height:"49%",
      position:"relative",
      display: 'grid',
      gridTemplateColumns :'25% 25% 25% 25%',
      gridColumnGap:0,

    }
  };
});

export default Menu;
