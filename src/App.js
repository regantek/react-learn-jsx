import React, { Component } from "react";
import "./style.css";
import Clock from "./Clock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Clock />
      </div>
    );
  }
}

export default App;
