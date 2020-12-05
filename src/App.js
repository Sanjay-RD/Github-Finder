import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/user/Users";
import Search from "./components/user/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/page/About";
import User from "./components/user/User";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/page/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            {/* passing props in navbar */}
            <Navbar title="Navbar" icon="fa fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <React.Fragment>
                      <Search />
                      <Users />
                    </React.Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
