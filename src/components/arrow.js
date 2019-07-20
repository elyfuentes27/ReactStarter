import React from "react"
import PropTypes from 'prop-types';
import "../styles/arrow.css"

const Arrow = ({type}) => (
  <div className="arrow">
    <div className={`top ${type === "back" ? "top-back": "top-next"}`} />
    <div className={`bottom ${type === "back" ? "bottom-back": "bottom-next"}`} />
  </div>
)

export default Arrow

Arrow.propTypes = {
    type: PropTypes.oneOf(["back", "next"])
}