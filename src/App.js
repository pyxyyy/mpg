import React, { Component } from 'react';
import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

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
                renderDiv = <Login setPage={this.setPage} />;
                break;
            case ("home"):
                renderDiv = <Home setPage={this.setPage} />;
                break;
            default:
                renderDiv = <Login setPage={this.setPage}/>;
                break;
        }
        return renderDiv;
  }
}

export default App;
