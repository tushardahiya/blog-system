import React, { Component } from 'react'
import SignUpForm from './SignUpForm/SignUpForm'
import classes from './SignUp.module.css'
class SignUp extends Component{
    render(){
        return (
            <div className={classes.formwrapper}>
                <SignUpForm />
            </div>
        )
    }
}
export default SignUp;