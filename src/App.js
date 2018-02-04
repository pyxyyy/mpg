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
                renderDiv = <div><script src="https://facebook.github.io/react/js/jsfiddle-integration-babel.js"></script><div id="container"><Login setPage={this.setPage} /></div></div>;
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
