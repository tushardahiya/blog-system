import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Toolbar.module.css'
import Logo from '../Logo/Logo'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
const toolbar = (props) => {
    return (
    <Aux>
        <div className={classes.NavBar}>
            <Logo />
            <h2><i>Views</i></h2>
            <ul>
                <li><NavLink to="/">Login</NavLink></li>
                <li><NavLink to="/sign-up" >SignUp</NavLink></li>
            </ul>
        </div>
    </Aux>
    )
}
export default toolbar;