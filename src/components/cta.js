import React from "react"
import PropTypes from 'prop-types';
import Arrow from "./arrow"
import "../styles/cta.css"

const Cta = ({text, arrowType}) => (
  <div className="cta">
    <span className={`cta-text ${arrowType === "back" ? "cta-text-back" : "cta-text-next"}`}>{text}</span>
    <div className={`cta-arrow ${arrowType === "back" ? "cta-arrow-back" : "cta-arrow-next"}`}>
        <Arrow type={arrowType} />
    </div>
  </div>
)

export default Cta

Cta.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(["back", "next"])
}