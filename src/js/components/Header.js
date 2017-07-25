import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import '../../styles/App.css';

export default class Header extends Component{
    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Header</h2>
            </header>
        );
    }
}