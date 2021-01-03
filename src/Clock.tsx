import Button from '@material-ui/core/Button/Button';
import React, { Component } from 'react'
class Clock extends React.Component {
    timerID: number;
    constructor(props: any) {
        super(props);
        this.timerID = 0;
    }
    state = {
        date: new Date(),

    };

    componentDidMount() {
        this.timerID = window.setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Current time is {this.state.date.toLocaleTimeString()}</h2>
                <Button variant="contained" color="primary">OK</Button>
            </div>
        );
    }
}
export default Clock;