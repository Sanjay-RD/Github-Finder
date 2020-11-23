import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // we can use any js operation within between render and return
  demo1 = () => "we use this. operation to get the function";
  render() {
    let name = "sanjay";
    const demo = () => "This is the function example";
    const loading = false;
    const showName = true;
    // we can use if statement inside render and return
    if (loading) {
      return <h1>loading...</h1>;
    } //we can also use ternary operator incase
    return (
      <div className="App">
        {/* to call the variable we use {} and pass the variable */}
        <h1>
          Hello <u>{name}</u>
        </h1>
        {/* we can also use any operation between double curly bracket ie{} */}
        <h2>
          1+1=<u>{1 + 1}</u>
        </h2>
        {/* using function */}
        <h2>
          function result = <u>{demo()}</u>
        </h2>
        {/* if we want to call function outside of render than we use this. ->functionname */}
        <h2>
          Call function outside render <u>{this.demo1()}</u>
        </h2>
        {/* using ternary operator */}
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <h2>Hello {showName ? name : null}</h2>
        )}
      </div>
    );
  }
}

export default App;
