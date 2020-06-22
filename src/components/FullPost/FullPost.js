import React, { Component } from 'react'
import classes from './FullPost.module.css'
import axios from '../../axios/axios'
import LoadSpinner from '../UI/LoadSpinner/LoadSpinner'
class FullPost extends Component{
    state = {
        selectedPost: null
    }
    loadData = () => {
        axios.get('/posts/'+this.props.match.params.id)
        .then(response=>{
            console.log(response.data)
            this.setState({
                selectedPost: response.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    componentDidMount(){
        this.loadData();
    }
    render(){
        let post = <LoadSpinner />
        if(this.state.selectedPost)
        {
            post = <div className={classes.FullPost}>
                <h1>{this.state.selectedPost.title}</h1>
                <p>{this.state.selectedPost.body}</p>
            </div>
        }
        return(
            <React.Fragment>
                {post}
            </React.Fragment>
        )
    }
}
export default FullPost;