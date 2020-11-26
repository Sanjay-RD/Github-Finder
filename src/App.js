import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import axios from "axios";
import Search from "./components/user/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_CLIENT);
  //   this.setState({ loading: true });

  //   // using async await
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_CLIENT}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  // Search users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    // using async await
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_CLIENT}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        {/* passing props in navbar */}
        <Navbar title="Navbar" icon="fa fa-github" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
