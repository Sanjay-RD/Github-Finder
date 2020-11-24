import React, { Component } from "react";

class UserItems extends Component {
  state = {
    id: "1",
    login: "octocat",
    avatar_url:
      "https://avatars1.githubusercontent.com/u/583231?s=460&u=a59fef2a493e2b67dd13754231daf220c82ba84d&v=4",
    html_url: "https://github.com/octocat",
  };
  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-image"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a className="btn btn-dark btn-sm my-1" href={html_url}>
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItems;
