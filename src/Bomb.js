import React, { Component } from 'react';

export default class Bomb extends Component {
    
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    bombStatus = () => {
        return this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"
    }

    render() {
        return (
            <div>{this.bombStatus()}</div>
        )
    }
}