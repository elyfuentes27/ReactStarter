import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Arrow from "../components/arrow"
import SEO from "../components/seo"

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi</h1> */}
    <p>Welcome to ReactStarter. We kindly ask you to respond some questions in order to provide you some react recommendations.</p>
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
          <FormControlLabel value="male" control={<Radio />} label="Multiple forms" />
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
    <p>Approximate number of states</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="<5" />
          <FormControlLabel value="male" control={<Radio />} label="5+" />
          <FormControlLabel value="male" control={<Radio />} label="10+" />
    </RadioGroup> 
    <Link to="/question-2/">
      <span>Next</span> 
      <Arrow type="next"/>
    </Link>
    <Link to="/toolResultsPage/"> Tools </Link>
  </Layout>
)

export default IndexPage
