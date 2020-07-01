import React from 'react'
import classes from './BackDrop.module.css'
const backdrop = (props) => {  
    return props.show ? <div className={classes.BackDrop} onClick={props.click}></div> : null ;
}
export default backdrop;
