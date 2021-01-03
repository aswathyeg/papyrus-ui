import React, { Component } from 'react'
import { render } from 'react-dom';


interface IProps {

}
interface IState {
    textcontent?: any
}
function BoilingVerdict(props: any): JSX.Element {
    if (props.celcious >= 100) {
        return (
            <p>The water would boil.</p>)

    }
    return <p>The water would not boil.</p>;


}
class Calculator extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            textcontent: ''
        }

    }

    handleOnChange(e: any) {
        this.setState({ textcontent: e.target.value })
    }
    render() {
        return (

            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input onChange={this.handleOnChange} type='text' value={this.state.textcontent}

                />
                <BoilingVerdict celcious={parseFloat(this.state.textcontent)} />
            </fieldset>

        );
    }
}
export default Calculator;