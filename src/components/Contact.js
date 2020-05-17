import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContactItem from "./ContactItem"

const Contact = () => {
  const classes = useStyles();

  const contact = [
    {
      title:"Kontakt",
      text:"prztjemniej@gmail.com"
    }, 
    {
      title:"Lokacja",
      text:"Koleczkowo "
    },
    {
      title:"Godziny pracy",
      text:"poniedzialek 10-12"
    },
 ]

  return (
   <div className={classes.container} id="contact">
     <div className={classes.kontakt}>
     {contact.map(item => {
       return <ContactItem title={item.title} text={item.text} key={item.key}/>
     })}
   </div>
   </div>
  );
};

const useStyles = makeStyles(() => {
  return {
container:{
  backgroundColor:"grey",
  height:"100vh",


  
},
kontakt:{
  width:"80%",
  gridTemplateColumns:"33% 33% 33%",
  height:"30%",
  borderTop:"2px solid gold",
  borderBottom:"2px solid gold",
  borderRight:"2px solid gold",
  display:"grid",
  margin:"auto"
}

}});

export default Contact;
