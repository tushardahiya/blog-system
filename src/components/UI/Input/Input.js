import React from 'react'
import classes from './Input.module.css'
const input = (props) => {
    let inputElement = null;
    let elementStyle = [classes.InputElement];
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
    console.log(props.valid)
    elementStyle = elementStyle.join(' ');
    console.log(elementStyle)
    switch(props.elementtype)
    {
        case('input'):
            inputElement = <input className ={elementStyle} 
            placeholder={props.config.placeholder} 
            value={props.value}
            type={props.config.type} 
            onChange = {props.change} />
            break;
        case('email'):
            inputElement =  <input className={elementStyle} 
            placeholder={props.config.placeholder} 
            value={props.value}
            type={props.config.type} 
            onChange = {props.change} />
            break;
        default:
            inputElement = <input className={elementStyle} 
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