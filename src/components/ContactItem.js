import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ContactItem = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.cardBorder}>
      <div className={classes.content}>
        <span className={classes.title}>{props.title}</span>
        <p className={classes.text}>{props.text}</p>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  cardBorder: {
    borderLeft: '1px solid #c5a645',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    position: 'relative',
    width: '75%',
    height: '75%',
    fontWeight: 100,
    whiteSpace: 'pre-wrap'
  },
  title: {
    fontSize: '30px',
    color: '#c5a645'
  },
  text: {
    color: 'white',
    fontSize: '20px',
    lineHeight: '1.7em'
  }
});
export default ContactItem;
