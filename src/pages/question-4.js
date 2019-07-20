import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Arrow from "../components/arrow"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FourthPage = () => (
  <Layout>
    {/* Question 1 */}
    <p>Does your application requires forms?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Simple form" />
          <FormControlLabel value="male" control={<Radio />} label="Multuple forms" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
    </RadioGroup> 
    {/* Question 2 */}
    <p>Does your application requires routing?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Simple routing" />
          <FormControlLabel value="male" control={<Radio />} label="Nested routing" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
    </RadioGroup> 
    {/* Question 3 */}
    <p>Does your application requires routing?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Simple routing" />
          <FormControlLabel value="male" control={<Radio />} label="Nested routing" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
    </RadioGroup> 

    <Link to="/result/">
      <span>Finish</span>  
      <Arrow type="next"/>
    </Link>
  </Layout>
)

export default FourthPage
