import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  // passing default props
  static defaultProps = {
    title: "Navbar",
    icon: "fa fa-github",
  };

  // declering props types
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i class={this.props.icon} aria-hidden="true"></i> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
