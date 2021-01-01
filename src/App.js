import React, { Component } from "react";
import "./style.css";

function SayHello() {
  return <h1>Welcome to React JSX</h1>;
}

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <SayHello />
        </header>
      </div>
    );
  }
}

export default App;
