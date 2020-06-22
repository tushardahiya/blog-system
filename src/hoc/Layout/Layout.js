import React from 'react'
import classes from './Layout.module.css'
import Aux from '../Auxiliary/Auxiliary'
import Toolbar from '../../components/UI/Toolbar/Toolbar'
const layout = (props) => {
    return(
        <Aux>
            <Toolbar />
            <div className={classes.Layout}>
                {props.children}
            </div>
        </Aux>
    )
}
export default layout