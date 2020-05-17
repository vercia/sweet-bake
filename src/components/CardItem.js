import React, { useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const CardItem = (props) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setHover(false)
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
          View more
        </h2>
      ) : (
        <h2 className={classes.cardTitle} onMouseOver={() => setHover(true)} >{props.title}</h2>
      )}
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
      <CloseIcon />
    </IconButton>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
      </Dialog>
    </div>
  );
};
const useStyles = makeStyles({
  media: {
    height: "100%",
    backgroundSize: "cover",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  cardTitle: {
    color: "white",
    fontSize: "28px",
    fontWeight: 100,
    backgroundColor: "#c5a645",
    width: "80%",
    height: "20%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80%",
    transition: "1s",
  },
  cardTitleHover: {
    color: "black",
    fontSize: "28px",
    fontWeight: 100,
    backgroundColor: "white",
    width: "80%",
    height: "20%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80%",
    transition: "1s",
    cursor: "pointer",
  },
});

export default CardItem;
