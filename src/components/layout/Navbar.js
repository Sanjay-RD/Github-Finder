import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} aria-hidden="true"></i> {title}
      </h1>
      <ul>
        <li>
          <i className="fa fa-home" aria-hidden="true"></i>
          <Link to="/">Home</Link>
        </li>
        <li>
          <i className="fa fa-address-book-o" aria-hidden="true"></i>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// passing default props
Navbar.defaultProps = {
  title: "Navbar",
  icon: "fa fa-github",
};

// declering props types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
