import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const Menu = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            Menu component
        </div>
    )
}

const useStyles = makeStyles(() => {
    return {
        container: {
            backgroundColor: 'purple',
            width: '100%',
            height: '100vh',
            display: 'flex',
        }
    };
});

export default Menu