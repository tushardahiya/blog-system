import React from 'react'
import classes from './Button.module.css'
const button = (props) => {
    let style = [classes.Button]
    if(props.valid)
    {
        style.push(classes.valid)
    }
    else
    {
        style.push(classes.invalid)
    }
    return (
    <button className={style.join(' ')}>{props.children}</button>
    )
}

export default button