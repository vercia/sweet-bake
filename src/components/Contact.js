import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContactItem from "./ContactItem";

const Contact = () => {
  const classes = useStyles();

  const contact = [
    {
      title: "Godziny pracy",
      text:
        "Poniedziałek	zamknięte\nWtorek-Piątek: 12:00 – 17:00\nSobota-Niedziela: 11:00 – 15:00",
    },
    {
      title: "Lokalizacja",
      text: "Zduńska 3A\n84-207 Koleczkowo\nPolska ",
    },
    {
      title: "Kontakt",
      text:
        "Napisz do nas:\nprzyjemniejpracowanie@gmail.com\nLub zadzwoń:\n+48 608-290-553",
    },
  ];

  return (
    <div className={classes.container} id="contact">
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
          <p className={classes.title}>Dostępne opcje płatności</p>
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
      backgroundColor: "#111",
      height: "100vh",
      width: "100vw"
    },
    content:{
      position:"relative",
      display: "table",
      tableLayout: "fixed",
      width:"80%",
      height:"60%",
      margin:"auto",
      top:100,
    },
    contact: {
      width: "80%",
      gridTemplateColumns: "35% 30% 30%",
      height: "55%",
      borderTop: "1px solid #c5a645",
      borderBottom: "1px solid #c5a645",
      borderRight: "2px solid #c5a645",
      display: "grid",
      margin: "auto",
    },
    pays: {
      display: "grid",
      gridTemplateColumns: "5% 30% 40%",
      height:"15%",
      color:"white",
      borderLeft: "1px solid #c5a645",
      borderBottom: "1px solid #c5a645",
      borderRight: "1px solid #c5a645",
      width: "80%",
      margin: "auto",
    },
    payments:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      color: 'white',
      fontSize: '1.1em',
      lineHeight: '1.7em',
      position:"relative",
      alignItems:"center"
    },
    title:{
      fontSize: '1.5em',
      color: '#c5a645'
    }
  };
});

export default Contact;
