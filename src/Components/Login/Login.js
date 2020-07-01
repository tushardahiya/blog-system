import React, { Fragment } from 'react';
import classes from './Login.module.css';
import {NavLink} from 'react-router-dom'

const login = () => {
    return (
        <Fragment>
            <div className={classes.wrapper}>
                <div className={classes.formwrapper}>
                    <h1>SIGN IN </h1>
                    <form>
                        <div className={classes.username}>
                            <label>USERNAME</label>
                            <input
                                type="text"
                                required
                                placeholder="Enter Your Username" />
                        </div>
                        <div className={classes.password}>
                            <label>PASSWORD</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                required />
                        </div>
                        <input type="submit" value="SIGN IN" />
                    </form>
                    <p>
                        Don't have an account ? <NavLink to="/sign-up">SIGN UP</NavLink>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default login;