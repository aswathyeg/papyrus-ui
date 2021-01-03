import React, { Component } from 'react'
import { threadId } from 'worker_threads'
interface IProps {

}
interface IState {
    isLoggedIn?: boolean
}
class ConditionalRendering extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {
            isLoggedIn: false
        }
    }
    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }
    render() {

        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (

            <div>
                {button}
            </div>
        )
    }
}
function LogoutButton(props: any) {
    return (
        <div>
            <button onClick={props.onClick}>Logout</button>
        </div>
    )
}
function LoginButton(props: any) {
    return (
        <div>
            <button onClick={props.onClick}>Login</button>
        </div>
    )
}
export default ConditionalRendering;