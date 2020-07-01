import React, { Component } from 'react'
import classes from './Card.module.css'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            upvoted: false,
            downvoted: false
        };
    }
    upvote() {
        if (this.state.upvoted === false && this.state.downvoted === false) {
            this.setState({
                count: this.state.count + 1,
                upvoted: !this.state.upvoted,
            })
        }
        if (this.state.upvoted === true) {
            this.setState({
                count: this.state.count - 1,
                upvoted: !this.state.upvoted,
            })
        }
        console.log(this.state)

    };

    downvote() {
        if (this.state.downvoted === false && this.state.upvoted === false) {
            this.setState({
                count: this.state.count - 1,
                downvoted: !this.state.downvoted,

            });
        }
        if (this.state.downvoted === true) {
            this.setState({
                count: this.state.count + 1,
                downvoted: !this.state.downvoted
            })
        }
        console.log(this.state)

    };
    render() {
        return (
            <div className={classes.Card}>
                <h3 onClick={this.props.click}>{this.props.title}</h3>
                <p>{this.props.body}</p>
                <h5>{this.props.author}</h5>
                <button className='upvote' onClick={(e) => this.upvote(e)} >upvote</button><br />
                <button className='downvote' onClick={(e) => this.downvote(e)}>downvote</button><br />
                <div >{this.state.count}</div>
            </div>
        );
    }

}
export default Card;