import React, { Component } from "react";
import UserItems from "./UserItems";

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
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
