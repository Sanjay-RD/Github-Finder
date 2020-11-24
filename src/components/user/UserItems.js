import React, { Component } from "react";

class UserItems extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
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
