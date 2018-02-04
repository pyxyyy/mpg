import React, { Component } from 'react';
import './Home.css';
import NavBar from "../../components/navbar/Navbar";
import Profile from "../../components/profile/Profile";
import Header from "../../components/header/Header";
import Transfer from "../../components/transfer/Transfer";
import Analytics from "../../components/analytics/Analytics";
import History from "../../components/history/History";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1
        }
    }

    setSelected = (selected) => {
        this.setState({
            selected: selected
        })
    };

    render() {
        let renderHome = null;
        switch (this.state.selected) {
            case (2):
                renderHome = <div className="Home">
                    <Header text="PAST TRANSACTIONS"/>
                    <History/>
                    <NavBar selected={this.state.selected} setSelected={this.setSelected}/>
                </div>;
                break;
            case (1):
                renderHome = <div className="Home">
                    <Header text="TRANSFER MONEY"/>
                    <Transfer/>
                    <NavBar selected={this.state.selected} setSelected={this.setSelected}/>
                </div>;
                break;
            case (3):
                renderHome = <div className="Home">
                    <Header text="ANALYTICS"/>
                    <Analytics/>
                    <NavBar selected={this.state.selected} setSelected={this.setSelected}/>
                </div>;
                break;
            case (4):
                renderHome = <div className="Home">
                    <Header text="ACCOUNT"/>
                    <Profile />
                    <NavBar selected={this.state.selected} setSelected={this.setSelected}/>
                </div>;
                break;

        }
        return renderHome;
    }
}

export default Home;