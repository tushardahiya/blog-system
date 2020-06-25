import React, { Component } from 'react'
import classes from './Card.module.css'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    upvote() {
        this.setState({
            count: this.state.count + 1
        });
    };

    downvote() {
        this.setState({
            count: this.state.count - 1
        });
    };
    render() {
        return (
            <div className={classes.Card} onClick={this.props.click}>
                <h3>{this.props.title}</h3>
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