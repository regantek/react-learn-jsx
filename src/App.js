import React, { Component } from "react";
import "./style.css";

function SayHello() {
  return <h1>Hello</h1>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <SayHello />
      </div>
    );
  }
}

export default App;
