import React from 'react'
import classes from './Input.module.css'
const input = (props) => {
    let inputElement = null;
    //console.log(props)
    switch(props.elementtype)
    {
        case('input'):
            inputElement = <input className ={classes.InputElement} 
            placeholder={props.config.placeholder} 
            value={props.value}
            type={props.config.type} 
            onChange = {props.change} />
            break;
        case('email'):
            inputElement =  <input className={classes.InputElement} 
            placeholder={props.config.placeholder} 
            value={props.value}
            type={props.config.type} 
            onChange = {props.change} />
            break;
        default:
            inputElement = <input className={classes.InputElement} 
            placeholder={props.config.placeholder} 
            value = {props.value}
            type={props.config.type} 
            onChange = {props.change} />
            break;
    }
    return(
        <div>
            {inputElement}
        </div>
    )
}
export default input;