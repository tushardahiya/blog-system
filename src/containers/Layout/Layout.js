import React from 'react'
import classes from './Layout.module.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'
const layout = (props) => {
    return(
        <Aux>
            <div className={classes.Layout}>
                {props.children}
            </div>
        </Aux>
    )
}
export default layout