import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.state = {
            likes: props.likes,
            comments: props.comments,
            hover: false
        };
    }

    mouseOver() {
        this.setState({hover: true});
    }

    mouseOut() {
        this.setState({hover: false});
    }

    render() {
        let content = null;
        if(this.state.hover) {
            content = <p>Likes: {this.state.likes} || Comments: {this.state.comments}</p>
        }
        return React.createElement(
            "div",
            {className: "Card", onMouseOver: this.mouseOver, onMouseOut: this.mouseOut},
            content
        );
    }
}
export default Card 