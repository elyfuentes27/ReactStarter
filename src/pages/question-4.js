import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Cta from "../components/cta"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FourthPage = () => (
  <Layout>
    <div className="body-margin-top" />
    {/* Question 1 */}
    <p>Do have specific design needs (custom design)?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Low level of customization" />
          <FormControlLabel value="male" control={<Radio />} label="High level of customization" />
    </RadioGroup> 
    {/* Question 2 */}
    <p>Approximate number of components including nested components</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="30" />
          <FormControlLabel value="male" control={<Radio />} label="10+" />
          <FormControlLabel value="male" control={<Radio />} label="300+" />
    </RadioGroup> 
    {/* Question 3 */}
    <p>Does your application requires themes?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Single theme" />
          <FormControlLabel value="male" control={<Radio />} label="Multiple themes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
    </RadioGroup> 

    <Link to="/question-3">
      <Cta text="Back" type="back"/>
    </Link>

    <Link to="/result/">
      <Cta text="Finish" type="next"/>
    </Link>
  </Layout>
)

export default FourthPage
