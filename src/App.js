import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* passing props in navbar */}
        <Navbar title="Navbar" icon="fa fa-github" />
      </div>
    );
  }
}

export default App;
