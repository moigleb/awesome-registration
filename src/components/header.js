import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/react-logo.png";

class Header extends Component {

  renderLinks (){
    if(this.props.authenticated.authenticated) {
      return <li><NavLink to="/signout" activeClassName="is-active">Sig Out</NavLink></li>;
    }
    return <li><NavLink to="/signin" activeClassName="is-active">Login</NavLink></li>;
  };

  render() {

    return (
        <header>
          <nav>
            <NavLink to="/" className="logo"><img src={Logo} alt="Logo"/></NavLink>
            <ul className="not-logged-menu">
              <li>
                <NavLink to="/protected" activeClassName="is-active">Protected</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="is-active">About</NavLink>
              </li>
              <li>
                <NavLink to="/support" activeClassName="is-active">Support</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
              </li>
            </ul>
            <ul className="login-wrap">
              {this.renderLinks()}
            </ul>
          </nav>
        </header>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth
  };
};

export default connect(mapStateToProps)(Header);