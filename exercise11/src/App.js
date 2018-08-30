import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlienCharacter from "./AlienCharacter";

class App extends Component {
  render() {
    return (
      <div className="App">
          <AlienCharacter/>
      </div>
    );
  }
}

export default App;
