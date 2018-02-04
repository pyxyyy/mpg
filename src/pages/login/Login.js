import React, { Component } from 'react';
import './Login.css';



class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            password: "",
        }
    }

mpg = () => {
    var dwolla = require('dwolla-v2');

    var client = new dwolla.Client({id: "PkAsSdVJyZbUZSB7RkCd636M1CsgF6KKeZrt6ilq8xSMw9uMXc", secret: "8Lo1LatM1cVAhEmpPEZ9Es0btxiZFF6PVAUl4xp14LTOsccHBl"});

    var appToken = new client.Token({access_token: "GnlMMOlLLTTwRRC44gGPkjfsVbVtwzkptDVdIB0fwGwLnV481N"});

    var requestBody = {
      _links: {
        source: {
          href: 'https://api-sandbox.dwolla.com/funding-sources/118b08b9-e1eb-48b7-94ad-866989b0764e'
        },
        destination: {
          href: 'https://api-sandbox.dwolla.com/funding-sources/2fa64102-185d-443d-9001-dda9bc37651d'
        }
      },
      amount: {
        currency: 'USD',
        value: '1.00'
      }
    };

    appToken
      .post('transfers', requestBody)
      .then(function(res) {
        res.headers.get('location'); // => 'https://api-sandbox.dwolla.com/transfers/74c9129b-d14a-e511-80da-0aa34a9b2388'
      });

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