import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavItem from './NavItem';

const Nav = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const SetMenu = () => {
    setOpen(!open);
  };

  const menu = [
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
    <div className={classes.nav}>
      <div onClick={SetMenu} className={classes.openMenu}>
        <ion-icon name='menu'></ion-icon>
      </div>

      <div className={open ? classes.menu : classes.menuOpen}>
        <div onClick={SetMenu} className={classes.closeMenu}>
          <ion-icon name='close'></ion-icon>
        </div>

        <ul className={classes.ulMenu}>
          {menu.map((item) => {
            return (
              <NavItem path={item.path} title={item.title} key={item.title} />
            );
          })}
        </ul>

        <div className={classes.mediaMenu}>
          <ul className={classes.ulMedia}>
            <li className={classes.liMedia}>
              <a
                href='https://pl-pl.facebook.com/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ion-icon name='logo-facebook'></ion-icon>
              </a>
            </li>

            <li className={classes.liMedia}>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ion-icon name='logo-instagram'></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  nav: {
    zIndex: 10,
    position: 'fixed',
    height: '60px',
    color: 'white'
  },
  openMenu: {
    position: 'absolute',
    left: 30,
    cursor: 'pointer',
    fontSize: '2.2em',
    top: 20,
    transition: '0.5s',
    color: '#c5a645',
    '&:hover': {
      color: 'white'
    },
    '@media (min-width:1440px)': {
      fontSize: '2.8em'
    }
  },
  menu: {
    position: 'fixed',
    zIndex: 2,
    width: '30%',
    height: '100vh',
    backgroundColor: '#fff',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    left: '-70%',
    transition: '1.5s'
  },
  menuOpen: {
    position: 'fixed',
    zIndex: 10,
    width: '75%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    left: 0,
    transition: '1.5s',
    '@media (min-width:768px)': {
      width: '40%'
    },
    '@media (min-width:1024px)': {
      width: '30%'
    }
  },
  closeMenu: {
    position: 'relative',
    lineHeight: '80px',
    float: 'right',
    marginRight: '20px',
    cursor: 'pointer',
    color: 'white',
    fontSize: '1.6em',
    transition: '0.5s',
    '&:hover': {
      color: '#c5a645'
    },
    '@media (min-width:1024px)': {
      fontSize: '2em'
    }
  },
  mediaMenu: {
    position: 'relative',
    top: '15%',
    color: '#c5a645',
    display: 'flex',
    left: '4%',
    '@media (min-width:375px)': {
      top: '25%'
    },
    '@media (min-width:768px)': {
      top: '30%'
    }
  },
  ulMenu: {
    listStyle: 'none',
    position: 'relative',
    top: '40%',
    left: '4%',
    transform: 'translate(0%, -50%)'
  },
  ulMedia: {
    position: 'relative',
    top: '50%'
  },
  liMedia: {
    display: 'inline-block',
    paddingRight: '10px',
    fontSize: '1.6em',
    '@media (min-width:1024px)': {
      fontSize: '2em'
    }
  }
});

export default Nav;
