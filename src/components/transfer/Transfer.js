import React, { Component } from 'react';
import './Transfer.css';

const contract = "https://sandbox.esignlive.com/auth?signerAuthenticationToken=YTY3ZmFlZTItMzI1OS00NGNlLWEzYWYtZDI2ODc1MzdkMzNh&target=https%3A%2F%2Fsandbox.esignlive.com%2Fpackages%2FrAGXKD21L4a5NKJRymb_O3PZ108%3D%2Fsign";

const Echo = React.createClass({
	getInitialState(){
  	return { messages : [] }
  },
  componentDidMount(){
    // this is an "echo" websocket service
  	this.connection = new WebSocket('wss://10.3.17.204:9091');
    // listen to onmessage event
    this.connection.onmessage = evt => {
      // add the new message to state
    	this.setState({
      	messages : this.state.messages.concat([ evt.data ])
      })
    };

    // for testing purposes: sending to the echo service which will send it back back
    setInterval( _ =>{
    	this.connection.send( Math.random() )
    }, 2000 )
  },
  render: function() {
    // slice(-5) gives us the five most recent messages
    return <ul>{ this.state.messages.slice(-5).map( (msg, idx) => <li key={'msg-' + idx }>{ msg }</li> )}</ul>;
  }
});

class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen:false,
            modal: false
        }
    }

    renderModal = () => {
        return (
            <div className="Transfer-modal">

                <div className="back" onClick={() => {this.setState({chosen: false})}}>
                    <img className="back" src={require('./back.svg')} />
                </div>

                <div className="bigcircle">
                    <img className="circle1-img" src={require('./john.png')} />
                </div>
                <span className="john">
                    JOHN DOE
                    <img className="star" src={require('./star.svg')} />
                    <span className="john-user">@johndoe</span>
                </span>
                <img className="doubletick" src={require('./doubletick.svg')} />
                <span className="approved">Nice! Your payment of $15.00 to John has been fulfilled.</span>
                <div className="button-wrapper-main">
                    <button className="button-main">LOAD PAST TRANSACTIONS</button>
                </div>
                <div className="Transfer-buttons">
                    <div className="Transfer-button-wrapper">
                        <button className="Transfer-button" onClick={() => {window.open("https://www.google.com"); setTimeout(() => {
                            this.renderModal();
                        }, 2000)}}>
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
        );
    }

    renderChosen = () => {
        return (
            <div className="Transfer">

                <div className="back" onClick={() => {this.setState({chosen: false})}}>
                    <img className="back" src={require('./back.svg')} />
                </div>

                <div className="bigcircle">
                    <img className="circle1-img" src={require('./john.png')} />
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
                <button className="Transfer-button" onClick={() => {window.open(contract); Echo(); setTimeout(() => {
                    this.setState({modal: true});
                }, 2000)}}>
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
                        <img className="circle1-img" src={require('./eunice.png')} />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./john.png')}
                             onClick={() => {
                                 this.setState({
                                     chosen: true
                                 })
                             }}
                        />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./wx.png')} />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./kartikye.png')} />
                    </div>
                </div>
                <div className="circles">
                    <div className="circle1">
                        <img className="circle1-img" src={require('./dao.png')} />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./crystal.png')} />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./kate.png')} />
                    </div>
                    <div className="circle1">
                        <img className="circle1-img" src={require('./chinmoy.png')} />
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
        return <div className="Transfer-wrapper">
            {this.state.modal ? this.renderModal() : (this.state.chosen ? this.renderChosen() : this.renderNotChosen())}
            {this.state.modal ? this.renderModal() : null}
            </div>
    };

}

export default Transfer;
