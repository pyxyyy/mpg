import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./pages/login/Login";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "login"
        }
    }

    setPage = (page) => {
        this.setState({
            page: page
        })
    };

  render() {
        let renderDiv = null;
        switch (this.state.page) {
            case ("login"):
                renderDiv = <Login setPage={this.setPage} />
        }
        return renderDiv;
  }
}

export default App;
