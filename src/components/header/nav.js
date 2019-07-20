import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../styles/nav.css"

const Nav = ({navOpen, handleToggleNav}) => (
    <div className={`nav ${navOpen ? "nav-open" : ""}`}>
        <ul className="nav-ul">
            <li className="nav-li" onClick={handleToggleNav}>
                <Link to="/" className="nav-link" >
                    React Tool
                </Link>
            </li>
            <li className="nav-li" onClick={handleToggleNav}>
                <Link to="/toolResultsPage/" className="nav-link" >
                    React Resources
                </Link>
            </li>
        </ul>
    </div>
  )
  
export default Nav

Nav.propTypes = {
    navOpen: PropTypes.bool,
    handleToggleNav: PropTypes.func
};