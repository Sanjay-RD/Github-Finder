import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/user/Users";
import Search from "./components/user/Search";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/page/About";
import User from "./components/user/User";

class App extends Component {
  state = {
    users: [],
    repos: [],
    user: {},
    loading: false,
    alert: null,
  };

  // Search users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    // using async await
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_CLIENT}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Clear state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  // get user
  getUser = async (username) => {
    this.setState({ loading: true });

    // using async await
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_CLIENT}`
    );
    this.setState({ user: res.data, loading: false });
  };

  // get user Repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });

    // using async await
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_CLIENT}`
    );
    this.setState({ repos: res.data, loading: false });
  };

  render() {
    const { loading, users, user, repos } = this.state;
    return (
      <Router>
        <div className="App">
          {/* passing props in navbar */}
          <Navbar title="Navbar" icon="fa fa-github" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </React.Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
