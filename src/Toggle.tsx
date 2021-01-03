import React from "react";
import Button from '@material-ui/core/Button/Button';
interface IProps {
}

interface IState {
    isToggleOn?: boolean;
}

class Toggle extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <Button onClick={this.handleClick} variant="contained"color="primary">
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </Button>
        );
    }
}


export default Toggle;