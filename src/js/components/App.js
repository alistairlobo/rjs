import React, { Component } from 'react';
//import logo from '../../images/logo.svg';
import '../../styles/App.css';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
      </div>
    );
  }
}

//export default App;
//http://casesandberg.github.io/react-color/
//https://www.gatsbyjs.org/docs/
