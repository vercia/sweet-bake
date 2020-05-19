import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ContactItem = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.cardBorder}>
      <div className={classes.content}>
        <p className={classes.title}>{props.title}</p>
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
    alignItems: 'center',
    '@media (min-width: 768px)': {
      // borderBottom: '0px solid #c5a645'
    }
  },
  content: {
    position: 'relative',
    width: '100%',
    height: '100%',
    fontWeight: 100,
    whiteSpace: 'pre-wrap',
    '@media (min-width: 1440px)': {
      width: '75%',
      height: '75%'
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
    }
  },
  text: {
    color: 'white',
    fontSize: '1em',
    lineHeight: '1.5em',
    wordBreak: 'break-word',
    '@media (min-width: 768px)': {
      fontSize: '1.1em'
    },
    '@media (min-width: 1440px)': {
      lineHeight: '1.7em'
    }
  }
});
export default ContactItem;
