import React, { Component } from 'react';
import './Login.css';
import mpg from "./mpg";



class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            password: "",
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
                <div className="Login-name" />
                <div className="Login-name-overlay">Esfer</div>
                <div className="Login-username-base">
                    <input className="Login-username"
                       placeholder="Username"
                       value={this.state.username}
                       onChange={(e) => {
                           this.updateUsername();
                       }}
                    />
                </div>
                <input className="Login-password"
                       placeholder="Password"
                       value={this.state.password}
                       onChange={(e) => {
                           this.updatePassword();
                       }}
                />
                <button className="Login-button"
                        onClick={() => {mpg()}}
                        onKeyDown={(e) => { if (e.keyCode === 13) this.login(); }}>Login</button>
                <div className="Login-forgot">Forgot password</div>
            </div>
        );
    }
}

export default Login;