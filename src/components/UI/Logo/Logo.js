import React from 'react'
import Logo from '../../../assets/Animal-Logo.jpg'
import classes from './Logo.module.css'
import {NavLink} from 'react-router-dom'
const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <NavLink to ="/"><img src={Logo} alt='Logo'/></NavLink>
        </div>
    )
}
export default logo;