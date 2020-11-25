import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} aria-hidden="true"></i> {title}
      </h1>
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
