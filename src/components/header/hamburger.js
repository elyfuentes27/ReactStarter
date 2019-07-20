import React from "react"
import PropTypes from "prop-types"
import "../../styles/hamburger.css"

const Hamburger = ({navOpen, handleToggleNav}) => (
    <div className="hamburger" onClick={handleToggleNav}>
        <div className={`top-bar ${navOpen ? "top-nav-open" : ""}`} />
        <div className="middle-bar" />
        <div className={`bottom-bar ${navOpen ? "bottom-nav-open" : ""}`} />
    </div>
  )
  
export default Hamburger

Hamburger.propTypes = {
    navOpen: PropTypes.bool,
    handleToggleNav: PropTypes.func
};