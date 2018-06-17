import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DevMountain</h1>
        </header>
        <p className="App-intro">
          React better get more intresting than this.....
        </p>
        <h2 className="App-outtro">i like coffie.....</h2>
      </div>
    );
  }
}

export default App;
