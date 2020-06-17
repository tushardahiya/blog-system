import React, { Fragment } from 'react';
import './Login.css';

const login = () => {
    return (
        <Fragment>
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>SIGN IN </h1>
                    <form>
                        <div className="username">
                            <label>USERNAME</label>
                            <input
                                type="text"
                                required
                                placeholder="Enter Your Username" />
                        </div>
                        <div className="password">
                            <label>PASSWORD</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                required />
                        </div>
                        <input type="submit" value="SIGN IN" />
                    </form>
                    <p>
                        Don't have an account ? <a href="">SIGN UP</a>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default login;