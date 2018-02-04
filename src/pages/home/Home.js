import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="Home">
                <button className="Login-button"
                        onClick={() => {this.props.setPage("login")}}
                >Log out</button>
            </div>
        );
    }
}

export default Home;