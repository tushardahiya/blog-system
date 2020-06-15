import React, { Component } from 'react'
import classes from './SignUpForm.module.css'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
class SignUpForm extends Component {
    state = {
        info: {
            name: {
                elementType: 'input',
                config:{
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: null
            },
            username: {
                elementType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Username'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: null
            },
            email: {
                elementType: 'input',
                config:{
                    type: 'email',
                    placeholder: 'E-Mail'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: null
            },
            password: {
                elementType: 'input',
                config:{
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: null
            },
            confirm_password: {
                elementType: 'input',
                config: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: null
            }
        }
    }
    checkvalidityHandler = (validation,value) => {
        let isValid = true;
        // console.log(validation)
        // console.log(value);
        if(validation.required)
        {
            //console.log("Entered")
            isValid &= value!=='';
        }
        return Boolean(isValid);
    }
    changeInputValueHandler = (event,id) => {
        let updatedInfo = {
            ...this.state.info,
        }
        let updatedTuple = {
            ...updatedInfo[id],
        }
        updatedTuple.value = event.target.value;
        updatedTuple.valid = this.checkvalidityHandler(updatedTuple.validation,event.target.value);
        //console.log(updatedTuple.valid);
        updatedInfo[id] = updatedTuple;
        this.setState({
            info: updatedInfo
        })
    }
    render(){
        let formElements = []
        for(let i in this.state.info){
            let formElement = {
                config:this.state.info[i],
                id: i
            }
            formElements.push(formElement)
        }
        return (
            <div className={classes.Form}>
                <label>Sign-Up</label>
                {formElements.map(formElement => {
                    return (
                        <Input elementtype = {formElement.config.elementType} 
                        key = {formElement.id} 
                        config = {formElement.config.config} 
                        value={formElement.config.value}
                        change = {(event)=>this.changeInputValueHandler(event,formElement.id)}
                        valid = {formElement.config.valid} />
                    )
                })}
                {/* <Input elementtype="input" placeholder="..." type="text" value="..."/> */}
                <Button valid>Submit</Button>
            </div>
        )
    }
}
export default SignUpForm