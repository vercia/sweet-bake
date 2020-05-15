import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const NavItem = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const SetMenu = () => {
    setOpen(!open);
  };

  return (
    <li className={classes.liMenu}>
      <Link
        activeClass={classes.active}
        to={props.path}
        spy={true}
        smooth={true}
        duration={1000}
        onClick={SetMenu}
      >
        {props.title}
      </Link>
    </li>
  );
};

const useStyles = makeStyles({
  liMenu: {
    fontSize: "25px",
    color: "#EFFFCD",
    textTransform: "uppercase",
    letterSpacing: "2px",
    display: "flex",
    cursor: "pointer",
    marginBottom: "40px",
    "&:hover":{
      color:"#99173C"
    }
  },
  active:{
    color:"#99173C"
  }
});

export default NavItem;
