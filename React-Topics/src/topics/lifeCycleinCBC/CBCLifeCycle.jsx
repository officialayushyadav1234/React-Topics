import React, { Component } from 'react'

export default class CBCLifeCycle extends Component {
    constructor() {
        super()
        console.log("I AM CONSTRUCTOR");
        this.state = { count: 0 }
    }

    componentDidMount() {
        console.log("MOUNTING PHASE");
    }

    componentDidUpdate() {
        console.log("UPDATING PHASE");
    }

    getSnapshotBeforeUpdate(props, state) {
        console.log("PREV STATE WAS", state.count);
        return null
    }

    componentWillUnmount() {
        console.log("UNMOUNTING PHASE");
    }

    render() {
        console.log("I AM RENDER");

        return (
            <div>
                <h1>LIFE CYCLE {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>update</button>
            </div>
        )
    }
}
