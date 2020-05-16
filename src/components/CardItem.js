import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import cake from "../images/cake.jpg";

const CardItem = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cake}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.cardTitle}
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
const useStyles = makeStyles({
  root: {
    width: 300,
    height: 370,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    margin: 'auto',
    '&:hover': {
      boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.45)'
    }
  },
  media: {
    height: 310
  },
  cardTitle: {
    color: '#c5a645',
    fontSize: '20px',
    fontWeight: 800,
    textAlign: 'center'
  }
});

export default CardItem;
