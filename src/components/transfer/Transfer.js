import React, { Component } from 'react';
import './Transfer.css';

const contract = "https://sandbox.esignlive.com/auth?signerAuthenticationToken=NWNmZGE3ZTAtZDA5Yy00MzYxLWI1NmQtMjg4YmJhZDQ3ZmY2&target=https%3A%2F%2Fsandbox.esignlive.com%2Fpackages%2FpN9qVtDODVRRg49VQq8xbGsCDTw%3D%2Fsign";

class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen:false
        }
    }

    renderChosen = () => {
        return (
            <div className="Transfer">

                <div className="back" onClick={() => {this.setState({chosen: false})}}>
                    <img className="back" src={require('./back.svg')} />
                </div>

                <div className="bigcircle">
                    <img className="circle1-img" src={require('./wr.png')} />
                </div>
                <span className="john">
                    JOHN DOE
                    <img className="star" src={require('./star.svg')} />
                    <span className="john-user">@johndoe</span>
                </span>
                <div className="john-request">
                    <div className="Transfer-line"></div>
                <span className="request">John has requested $15.00 from you </span>
                    <span className="request-desc"><span className="norm">for </span>Chicken Nuggets at McDonald’s</span>
                <span className="request-extra">Note: No refunds on Chicken Nuggets. <br/>This legal agreement is final.</span>
                </div>

                <div className="button-wrapper-main">
                    <button className="button-main">LOAD PAST TRANSACTIONS</button>
                </div>


            <div className="Transfer-buttons">
                <div className="Transfer-button-wrapper">
                <button className="Transfer-button" onClick={() => {window.open("https://www.google.com"); setTimeout(() => {}, 2000)}}>
                    <img className="payicon" src={require('./pay.svg')} />
                </button>
                    <span className="pay">PAY</span>
                </div>
                <div className="Transfer-button-wrapper">
                <button className="Transfer-button" onClick={() => {window.open("https://www.google.com")}}>
                    <img className="receiveicon" src={require('./receive.svg')} />
                </button>
                    <span className="receive">REQUEST</span>
                </div>
        </div>

            </div>
        )
    };

    renderNotChosen = () => {
        return (
            <div className="Transfer">
                <div className="Favorites">PENDING TRANSACTIONS</div>

                <div className="john-request-short">
                    <span className="request">John has requested $15.00 from you </span>
                    <span className="request-desc"><span className="norm">for </span>Chicken Nuggets at McDonald’s</span>
                    <span className="request-extra">Note: No refunds on Chicken Nuggets. <br/>This legal agreement is final.</span>
                    <div className="button-wrapper-main" onClick={() => {this.setState({chosen: true})}}>
                    <button className="button-main">SETTLE UP</button>
                    </div>
                </div>




                <div className="Favorites">FAVORITES</div>
                <div className="circles">
                    <div className="circle1">
                        <img className="circle1-img" src={require('./wr.png')} />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./wr.png')}
                             onClick={() => {
                                 this.setState({
                                     chosen: true
                                 })
                             }}
                        />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./wr.png')} />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./wr.png')} />
                    </div>
                </div>
                <div className="circles">
                    <div className="circle1">
                        <img className="circle1-img" src={require('./wr.png')} />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./wr.png')} />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./wr.png')} />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./wr.png')} />
                    </div>
                </div>

                <div className="Favorites">SEARCH BY NUMBER, USERNAME OR EMAIL</div>
                <div className="searchbar">
                    <img className="searchicon" src={require('./search.svg')} />
                    <input className="search"></input>
                </div>
            </div>
        );
    };

    render() {
        return <div className="Transfer-wrapper">{this.state.chosen ? this.renderChosen() : this.renderNotChosen()}</div>
    };

}

export default Transfer;
