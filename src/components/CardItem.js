import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';

const CardItem = (props) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setHover(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className={classes.media}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      {hover == true ? (
        <h2 className={classes.cardTitleHover} onClick={handleOpen}>
          Zobacz więcej
        </h2>
      ) : (
        <h2 className={classes.cardTitle} onMouseOver={() => setHover(true)}>
          {props.title}
        </h2>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle id='alert-dialog-slide-title' className={classes.title}>
          {props.titleDesc}
        </DialogTitle>
        <DialogContentText
          id='alert-dialog-description'
          className={classes.content}
        >
          <p className={classes.option}>{props.options}</p>
        </DialogContentText>
        <p className={classes.span}>{props.spanOne}</p>
        {props.title === 'Inne wypieki' ? (
          <div>
            <DialogTitle
              id='alert-dialog-slide-title'
              className={classes.title}
            >
              {props.titleDescTwo}
            </DialogTitle>
            <DialogContentText
              id='alert-dialog-description'
              className={classes.content}
            >
              <p className={classes.option}>{props.optionsTwo}</p>
            </DialogContentText>
            <p className={classes.span}>{props.spanTwo}</p>
            <DialogTitle
              id='alert-dialog-slide-title'
              className={classes.title}
            >
              {props.titleDescThree}
            </DialogTitle>
            <DialogContentText
              id='alert-dialog-description'
              className={classes.content}
            >
              <p className={classes.option}>{props.optionsThree}</p>
            </DialogContentText>
          </div>
        ) : (
          <div></div>
        )}
      </Dialog>
    </div>
  );
};
const useStyles = makeStyles({
  media: {
    height: '100%',
    backgroundSize: 'cover',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  cardTitle: {
    color: 'white',
    fontSize: '28px',
    fontWeight: 100,
    backgroundColor: '#c5a645',
    width: '80%',
    height: '20%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '80%',
    transition: '1s'
  },
  cardTitleHover: {
    color: 'black',
    fontSize: '28px',
    fontWeight: 100,
    backgroundColor: 'white',
    width: '80%',
    height: '20%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '80%',
    transition: '1s',
    cursor: 'pointer'
  },
  content: {
    width: '90%',
    margin: 'auto',
    lineHeight: '1.5em',
    color: '#c5a645'
  },
  option: {
    whiteSpace: 'pre-wrap',
    color: 'white',
    marginTop: '-1%'
  },
  span: {
    whiteSpace: 'pre-wrap',
    color: '#c5a645',
    width: '80%',
    margin: 'auto',
    marginTop: '-2%',
    lineHeight: '1.5em',
    padding: '10px 0px',
    textAlign: 'center'
  },
  title: {
    color: '#c5a645'
  },
  closeButton: {
    color: '#c5a645',
    right: 0,
    width: '10%',
    position: 'absolute'
  }
});

export default CardItem;
