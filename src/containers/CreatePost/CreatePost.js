import React, {Component} from 'react'
import Input from '../../components/UI/Input/Input'
import classes from './CreatePost.module.css'
import Button from '../../components/UI/Button/Button'
class CreatePost extends Component{
    state = {
        data:{
            title: {
                elementType: 'input',
                config:{
                    type: 'text',
                    placeholder: 'Title (No more than 20 words)'
                },
                value: '',
                validation:{
                    required: true,
                    max_len: 20
                },
                valid: null
            },
            content: {
                elementType: 'textarea',
                config: {
                    type: 'text',
                    placeholder: 'Post goes here...'
                },
                value: '',
                validation:{
                    required: true,
                    hate: false
                },
                valid: null
            },
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
        if(validation.max_len!==null)
        {
            isValid &= value.split(' ').length < 20
        }
        return Boolean(isValid);
    }
    changeInputValueHandler = (event,id) => {
        let updatedInfo = {
            ...this.state.data,
        }
        let updatedTuple = {
            ...updatedInfo[id],
        }
        updatedTuple.value = event.target.value;
        updatedTuple.valid = this.checkvalidityHandler(updatedTuple.validation,event.target.value);
        //console.log(updatedTuple.valid);
        updatedInfo[id] = updatedTuple;
        this.setState({
            data: updatedInfo
        })
    }
    render(){
        let formElements = []
        for(let i in this.state.data){
            let formElement = {
                config:this.state.data[i],
                id: i
            }
            formElements.push(formElement)
        }
        return(
            <div className={classes.CreatePost}>
                <label>Create a New Post</label>
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
                <Button valid>Submit</Button>
            </div>    
        )
    }
}
export default CreatePost;