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
                }
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
                }
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
                }
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
                }
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
                }
            }
        }
    }
    changeInputValueHandler = (event,id) => {
        let updatedInfo = {
            ...this.state.info,
        }
        let updatedTuple = {
            ...updatedInfo[id],
        }
        updatedTuple.value = event.target.value;
        updatedInfo[id] = updatedTuple;
        this.setState({
            info: updatedInfo
        })
    }
    render(){
        let formElements = []
        for(let i in this.state.info){
            let formElement = {
                elementtype: this.state.info[i].elementType,
                value: this.state.info[i].value,
                config: {
                    ...this.state.info[i].config
                },
                id: i
            }
            formElements.push(formElement)
        }
        return (
            <div className={classes.Form}>
                <label>Sign-Up</label>
                {formElements.map(formElement => {
                    return (
                        <Input elementtype = {formElement.elementType} 
                        key = {formElement.id} 
                        config = {formElement.config} 
                        value={formElement.value}
                        change = {(event)=>this.changeInputValueHandler(event,formElement.id)} />
                    )
                })}
                {/* <Input elementtype="input" placeholder="..." type="text" value="..."/> */}
                <Button valid>Submit</Button>
            </div>
        )
    }
}
export default SignUpForm