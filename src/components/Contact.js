import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactItem from './ContactItem';

const Contact = () => {
  const classes = useStyles();

  const contact = [
    {
      title: 'Godziny pracy',
      text:
        'Poniedziałek	zamknięte\nWtorek-Piątek: 12:00 – 17:00\nSobota-Niedziela: 11:00 – 15:00'
    },
    {
      title: 'Lokalizacja',
      text: 'Zduńska 3A\n84-207 Koleczkowo\nPolska '
    },
    {
      title: 'Kontakt',
      text:
        'Napisz do nas:\nprzyjemniejpracowanie@gmail.com\nLub zadzwoń:\n+48 608-290-553'
    }
  ];

  return (
    <div className={classes.container} id='contact'>
      <div className={classes.content}>
        <div className={classes.contact}>
          {contact.map((item) => {
            return (
              <ContactItem title={item.title} text={item.text} key={item.key} />
            );
          })}
        </div>
        <div className={classes.pays}>
          <div></div>
          <p className={classes.title}>Dostępne opcje płatności:</p>
          <ul className={classes.payments}>
            <li>Przelew bankowy</li>
            <li>Gotówka</li>
            <li>Płatność kartą</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    container: {
      backgroundColor: '#111',
      height: '100vh',
      width: '100vw',
      textAlign: 'center'
    },
    content: {
      position: 'absolute',
      display: 'table',
      tableLayout: 'fixed',
      width: '100%',
      margin: 'auto',
      marginTop: '5%',
      '@media (min-width: 768px)': {
        top: '10%',
        width: '90%',
        position: 'relative',
        marginTop: '0%'
      },
      '@media (min-width: 1440px)': {
        width: '80%',
        height: '60%'
      }
    },
    contact: {
      width: '95%',
      gridTemplateRows: '35% 30% 35%',
      height: '55%',
      borderTop: '1px solid #c5a645',
      borderRight: '2px solid #c5a645',
      display: 'grid',
      margin: 'auto',
      '@media (min-width: 768px)': {
        width: '90%',
        gridTemplateColumns: '35% 30% 35%',
        borderBottom: '1px solid #c5a645',
        gridTemplateRows: 'none'
      }
    },
    pays: {
      display: 'grid',
      gridTemplateColumns: '5% 30% 65%',
      height: '15%',
      color: 'white',
      borderLeft: '1px solid #c5a645',
      borderBottom: '1px solid #c5a645',
      borderRight: '1px solid #c5a645',
      width: '95%',
      margin: 'auto',
      '@media (min-width: 768px)': {
        width: '90%'
      },
      '@media (min-width: 1440px)': {
        gridTemplateColumns: '5% 30% 60%'
      }
    },
    payments: {
      display: 'flex',
      flexDirection: 'column',

      color: 'white',
      fontSize: '1em',
      lineHeight: '1.5em',
      position: 'relative',

      margin: '5px auto',
      textAlign: 'left',
      '@media (min-width: 768px)': {
        fontSize: '1.1em',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      '@media (min-width: 1024px)': {
        width: '75%'
      },
      '@media (min-width: 1440px)': {
        width: '70%'
      }
    },
    title: {
      fontSize: '1.2em',
      color: '#c5a645',
      margin: '5px auto',
      '@media (min-width: 768px)': {
        fontSize: '1.5em'
      },
      '@media (min-width: 1024px)': {
        margin: '10px auto'
      },
      '@media (min-width: 1440px)': {
        margin: 'auto'
      }
    }
  };
});

export default Contact;
