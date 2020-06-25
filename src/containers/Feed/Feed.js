import React, { Component } from 'react'
import Card from '../../components/UI/Card/Card'
import classes from './Feed.module.css'
import axios from '../../axios/axios'
import LoadSpinner from '../../components/UI/LoadSpinner/LoadSpinner'
class feed extends Component {
    state = {
        posts: null
    }
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                let posts = response.data.slice(0, 10);
                this.setState({
                    posts: posts
                })
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }
    goToFullPostHandler = (id) => {
        this.props.history.push({ pathname: '/' + id })
    }
    render() {
        let posts = <LoadSpinner />
        if (this.state.posts) {
            posts = this.state.posts.map(post => {
                return <Card key={post.id} title={post.title} body={post.body} userid={post.userid}
                    click={() => this.goToFullPostHandler(post.id)}
                />
            });
        }
        return (
            <div>
                <section className={classes.Feed}>
                    {posts}
                </section>
            </div>
        )
    }
}
export default feed;