import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Logo from "./header/logo"
import Hamburger from "./header/hamburger"
import Nav from "./header/nav"
import "../styles/header.css"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        navOpen: false
    };
  }

  handleToggleNav = () => {
    this.setState({navOpen: !this.state.navOpen})
  }

  render() {
    const {navOpen} = this.state
    return (
      <header>
        <Link to="/">
          <div className="logo-wrapper">
            <Logo />
          </div>
        </Link>
        <Hamburger navOpen={navOpen} handleToggleNav={this.handleToggleNav} />
        <Nav navOpen={navOpen} handleToggleNav={this.handleToggleNav} />
      </header>
    )
  }
}

export default Header
