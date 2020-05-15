import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowScrollPosition from '@rehooks/window-scroll-position';
import NavItem from './NavItem';

const Nav = () => {
  const classes = useStyles();
  let position = useWindowScrollPosition();

  const navItem = [
    {
      path: 'home',
      title: 'Strona główna'
    },
    {
      path: 'menu',
      title: 'Menu'
    },
    {
      path: 'services',
      title: 'Usługi'
    },
    {
      path: 'gallery',
      title: 'Galeria'
    },
    {
      path: 'contact',
      title: 'Kontakt'
    }
  ];

  return (
    <div className={classes.container}>
      <div className={position.y < 100 ? classes.navlist : classes.navbar}>
        <ul className={classes.navlist}>
          {navItem.map((item) => {
            return (
              <NavItem key={item.title} title={item.title} path={item.path} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    container: {
      backgroundColor: 'green',
      width: '100%',
      height: '8vh',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: 3
    },
    navlist: {
      marginTop: 0,
      listStyle: 'none',
      display: 'flex',
      padding: 8,
      minHeight: '6vh',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '40%',
      fontSize: '1.2rem',
      color: 'white',
      position: 'fixed',
      zIndex: 3,
      backgroundColor: 'red',
      textTransform: 'uppercase'
      // '@media (min-width:768px)': {
      //   fontSize: '1.7rem'
      // },
      // '@media (min-width:1024px)': {
      //   width: '35%',
      //   backgroundColor: 'transparent',
      //   right: 0,
      //   transition: '0.5s',
      //   cursor: 'pointer'
      // },
      // '@media (min-width:1440px)': {
      //   width: '45%',
      //   fontSize: '1.6rem'
      // }
    },
    navbar: {
      display: 'flex',
      padding: 8,
      minHeight: '6vh',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100vw',
      fontSize: '22px',
      position: 'fixed',
      zIndex: 3,
      cursor: 'pointer',
      backgroundColor: 'orange',
      transition: '0.5s'
    }
  };
});

export default Nav;
