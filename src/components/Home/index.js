import React, { Component } from 'react';
import './style.css';
import Web3 from 'web3';
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

class Home extends Component {

    render() {
      console.log(web3.eth.accounts);

        return (
            <div className="Home">
                <h2>Home page Face</h2>
            </div>
        );
    }
}

export default Home;
