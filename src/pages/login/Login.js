import React, { Component } from 'react';
import './Login.css';
<<<<<<< HEAD
import {send_} from "./mpg";

=======
>>>>>>> 0016d9437387614e216d9351eff140c59009788d


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
        return this.state.username === USERNAME && this.state.password === PASSWORD;
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
                        <img className="Login-logo" src={require('./tsf.svg')} />
                        <span className="Login-desc">Making bank transfers to your friends easy and secure.</span>
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
<<<<<<< HEAD
                        onClick={() => {send_()}}
                        onKeyDown={(e) => { if (e.keyCode === 13) this.login(); }}>Login</button>
                <div className="Login-forgot">Forgot password</div>
=======
                        onClick={() => {this.login();}}
                        >LOGIN</button>
                <div className="Login-forgot">I forgot my password</div>
                <div className="Login-create">Sign up for an account</div>
>>>>>>> 0016d9437387614e216d9351eff140c59009788d
            </div>
        );
    }
}

export default Login;