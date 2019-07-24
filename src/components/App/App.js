import React, { Component } from "react";
import Main from "../Main/Main";
import "./App.css";
import "whatwg-fetch";
// import Series from "../../containers/Series/Series";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">TV Series App</h1>
                </header>
                <Main />
                {/* <Series /> */}
            </div>
        );
    }
}

export default App;
