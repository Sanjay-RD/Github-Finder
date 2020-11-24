import React, { Component } from "react";
import UserItems from "./UserItems";

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: "octocat",
        avatar_url:
          "https://avatars1.githubusercontent.com/u/583231?s=460&u=a59fef2a493e2b67dd13754231daf220c82ba84d&v=4",
        html_url: "https://github.com/octocat",
      },
      {
        id: 2,
        login: "sanjay",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/58023898?s=460&u=c805633f992aae8c695f33b6c27ba103fd3b649c&v=4",
        html_url: "https://github.com/Sanjay-RD",
      },
      {
        id: 3,
        login: "Traversy Media",
        avatar_url:
          "https://avatars1.githubusercontent.com/u/5550850?s=460&u=fd608e37006781e0847825dc4045469eb4efbeed&v=4",
        html_url: "https://github.com/bradtraversy",
      },
    ],
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
