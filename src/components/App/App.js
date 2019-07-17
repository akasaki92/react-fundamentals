import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/Intro';

class App extends Component {
  state = {
    series: []
  }

  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series App</h1>
        </header>
        <Intro message="this value from props"/>
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;