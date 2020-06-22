import React from 'react'
import classes from './Card.module.css'
const card = (props) => {
    return (
        <div className={classes.Card} onClick={props.click}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <h5>{props.author}</h5>
        </div>
    );
}
export default card;