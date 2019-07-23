import React, { Component } from "react";
import Intro from "../Intro/Intro";
import Series from "../../containers/Series/Series";
import "./App.css";
import "whatwg-fetch";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">TV Series App</h1>
                </header>
                <Intro message="Here the most series you love" />
                <Series />
            </div>
        );
    }
}

export default App;
