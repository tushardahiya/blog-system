import React, { Component } from 'react'
import classes from './NewPost.module.css'
import Modal from '../UI/Modal/Modal'
import CreatePost from '../../containers/CreatePost/CreatePost'
import Button from '../UI/Button/Button'
class NewPost extends Component{
    state = {
        showModal: false
    }
    showModalHandler = () =>{
        this.setState({
            showModal: true
        })
    }
    hideModalHandler = () =>{
        this.setState({
            showModal: false
        })
    }
    render(){
        return(
            <div className={classes.buttonContainer}>
                <Modal show={this.state.showModal} hide={this.hideModalHandler}>
                    <CreatePost />
                </Modal>
                <button className={classes.CreateButton} onClick={this.showModalHandler}>
                    Create New Post
                </button>
            </div>
        )
    }
}

export default NewPost;