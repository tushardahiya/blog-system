import React from 'react'
import BackDrop from '../BackDrop/BackDrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import classes from './Modal.module.css'
const modal = (props) =>{
    let style = [classes.Modal]
    if(!props.show)
    {
        style.push(classes.Hide)
    }
    return(
        <Aux>
            <BackDrop show ={props.show} click={props.hide}/>
            <div className = {style.join(' ')}>
                {props.children}
            </div>
        </Aux>
    )
}
export default modal;