import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/Intro';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series App</h1>
        </header>
        <Intro message="this value from props"/>
      </div>
    );
  }
}

export default App;
