import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TwoPlayerScoreKeeper from "./TwoPlayerScoreKeeper";

class App extends Component {
  render() {
    return (
      <div className>
         <TwoPlayerScoreKeeper/>
      </div>
    );
  }
}

export default App;
