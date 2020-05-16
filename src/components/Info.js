import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Info = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1>Cukiernia | Pracownia Cukiernicza Przyjemniej S.C. | Koleczkowo</h1>
      </div>
      <div className={classes.right}>
        <span>
          Hmmm co to może znaczyć... dla jednych zapach kawy o poranku, dla
          innych ucieczka w góry a dla Nas..... dla Nas to pasja, ciężka praca i
          mnóstwo satysfakcji. W trakcie tworzenia tego projektu dowiedzieliśmy
          się wiele o sobie ale również tego jak wiele znaczy dla Nas
          cukiernictwo. Chcielibyśmy zaprosić Was do Naszego świata, świata w
          którym jest... Przyjemniej.
        </span>
      </div>
    </div>
  );
};
const useStyle = makeStyles({
  container: {
    width: '75%',
    height: '35vh',
    display: 'flex',
    position: 'relative',
    top: 30,
    bottom: 30,
    margin: 'auto'
  },
  left: {
    width: '30%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    color: '#c5a645'
  },
  right: {
    width: '60%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    left: '10%',
    color: 'white',
    fontSize:'1.2em'
  }
});
export default Info;
