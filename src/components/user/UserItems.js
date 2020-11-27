import React from "react";
import { Link } from "react-router-dom";
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
        <Link className="btn btn-dark btn-sm my-1" to={`user/${login}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItems;
