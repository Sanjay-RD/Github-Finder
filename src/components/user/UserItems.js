import React from "react";
import PropTypes from "prop-types";

const UserItems = ({ user: { login, avatar_url, html_url } }) => {
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
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItems;
