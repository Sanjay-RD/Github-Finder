import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItems from "./components/user/UserItems";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* passing props in navbar */}
        <Navbar title="Navbar" icon="fa fa-github" />
        <UserItems />
      </div>
    );
  }
}

export default App;
