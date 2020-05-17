import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactItem from './ContactItem';

const Contact = () => {
  const classes = useStyles();

  const contact = [
    {
      title: 'Godziny pracy',
      text:
        'Poniedziałek	zamknięte\nWtorek-Piątek	12:00 – 17:00\nSobota-Niedziela 11:00 – 15:00'
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
      <div className={classes.contact}>
        {contact.map((item) => {
          return (
            <ContactItem title={item.title} text={item.text} key={item.key} />
          );
        })}
      </div>
      <div className={classes.pays}>
        <p>Dostępne opcje płatności</p>
        <ul>
          <li>Przelew bankowy</li>
          <li>Gotówka</li>
          <li>Płatność kartą</li>
        </ul>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    container: {
      backgroundColor: '#111',
      height: '100vh',
      display: 'grid',
      gridTemplateRows: '33% 12%'
    },
    contact: {
      width: '80%',
      gridTemplateColumns: '33% 33% 33%',
      height: '100%',
      borderTop: '2px solid #c5a645',
      borderBottom: '2px solid #c5a645',
      borderRight: '2px solid #c5a645',
      display: 'grid',
      margin: 'auto'
    },
    pays: {
      display:'grid',
      gridTemplateColumns: '30% 70%',
      borderLeft: '2px solid #c5a645',
      borderBottom: '2px solid #c5a645',
      borderRight: '2px solid #c5a645',
      backgroundColor: 'grey',
      width: '80%',
      margin: 'auto'
    }
  };
});

export default Contact;
