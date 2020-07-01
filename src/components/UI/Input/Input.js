import React from 'react'
import classes from './Input.module.css'
const input = (props) => {
    let inputElement = null;
    let elementStyle = [classes.InputElementContainer];
    switch(props.valid){
        case(true):
            elementStyle.push(classes.valid);
            break;
        case(false):
            elementStyle.push(classes.invalid);
            break;
        default:
            break;
    }
    if(props.elementtype==='textarea')
    {
        elementStyle.push(classes.textareacontainer)
    }
    elementStyle = elementStyle.join(' ');
    switch(props.elementtype)
    {
        case('input'):
            inputElement = <input className={classes.InputElement}
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
        case('textarea'):
            inputElement = <textarea className={classes.textarea}
            placeholder={props.config.placeholder}
            value={props.value}
            type={props.config.type}
            onChange={props.change} />
            break
        default:
            inputElement = <input className={classes.InputElement}
            placeholder={props.config.placeholder} 
            value = {props.value}
            type={props.config.type} 
            onChange = {props.change} />
            break;
    }
    return(
        <div className={elementStyle}>
            {inputElement}
        </div>
    )
}
export default input;