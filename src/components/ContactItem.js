import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const ContactItem = (props) => {
  const classes = useStyles();
  return (
        <div className={classes.cardBorder}>
          <div className={classes.content}>
            <span className={classes.title}>{props.title}</span>
            <p className={classes.text}>
  {props.text}
            </p>
          </div>
        </div>
  );
};

const useStyles = makeStyles({
  cardBorder: {
    borderLeft: "2px solid gold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "relative",
    width: "75%",
    height: "75%",
    fontWeight: 100,

  },
  title: {
    fontSize: "30px",
    color: "gold",
  },
  text: {
    color: "white",
    fontSize: "20px",
    lineHeight: "1.7em",
  },
});
export default ContactItem;
