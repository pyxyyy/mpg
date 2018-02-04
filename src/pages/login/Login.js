import React, { Component } from 'react';
import './Login.css';
import {send_} from "./mpg";

const desc = "MAKING BANK TRANSFERS TO YOUR PEERS EASY AND SAFE.";
const desc_lower = "Making bank transfers to your friends easy and safe.";
class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            password: "",
            usernameFocused: false,
            passwordFocused: false
        }
    }

    updateUsername = (username) => {
        this.setState({ username: username })
    };
    updatePassword = (password) => {
        this.setState({ password: password })
    };
    resetUsername = () => {
        this.setState({ username: "" })
    };
    resetPassword = () => {
        this.setState({ password: "" })
    };

    authenticate = () => {
        // the world's most insecure login authentication
        const USERNAME = "devweeksf";
        const PASSWORD = "helloworld";
        return (this.state.username === USERNAME && this.state.password === PASSWORD) ||
            (this.state.username.length === 0 && this.state.password.length === 0);
    };

    login = () => {
        if (this.authenticate()) {
            this.props.setPage("home");
            this.resetUsername();
            this.resetPassword();
        }
    };


    render() {
        return (
            <div className="Login">
                <div className="Login-company">
                        <span className="Login-name">ESFER</span>
                        <img className="Login-logo" src={require('./logo.svg')} />
                        <span className="Login-desc">{desc}</span>
                </div>
                    <input className="Login-username"
                           placeholder="Username"
                           value={this.state.username}
                           onChange={(e) => {
                               this.updateUsername(e.target.value);
                           }}
                           onFocus={() => {
                               this.setState({ usernameFocused: true })
                           }}
                           onBlur={() => {
                               this.setState({ usernameFocused: false })
                           }}
                    />
                    <input className="Login-username"
                           type="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={(e) => {
                               this.updatePassword(e.target.value);
                           }}
                           onKeyDown={(e) => {
                               if (e.keyCode === 13) this.login();
                           }}
                           onFocus={() => {
                               this.setState({ passwordFocused: true })
                           }}
                           onBlur={() => {
                               this.setState({ passwordFocused: false })
                           }}
                    />
                <button className="Login-button"
                        onClick={() => {this.login();}}
                        >LOGIN</button>
                <div className="Login-forgot">I forgot my password</div>
                <div className="Login-create">Sign up for an account</div>
            </div>
        );
    }
}

export default Login;