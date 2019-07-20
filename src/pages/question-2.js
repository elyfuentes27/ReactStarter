import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Arrow from "../components/arrow"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SecondPage = () => (
  <Layout>
    {/* Question 1 */}
    <p>Is your aplication visualizing data?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Simple data sets" />
          <FormControlLabel value="male" control={<Radio />} label="Complex graphs" />
          <FormControlLabel value="male" control={<Radio />} label="Tables and reports" />
    </RadioGroup> 
    {/* Question 2 */}
    <p>Is your app going to be deployed across multiple regions?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Single region" />
          <FormControlLabel value="male" control={<Radio />} label="Multiple regions" />
    </RadioGroup> 
    {/* Question 3 */}
    <p>Do you require multiple languages?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Single language" />
          <FormControlLabel value="male" control={<Radio />} label="Multiple languages" />
    </RadioGroup> 

    <Link to="/">
      <span>Back</span>   
      <Arrow type="back"/>
    </Link>

    <Link to="/question-3/">
      <span>Next</span>  
      <Arrow type="next"/>
    </Link>
    

  </Layout>
)

export default SecondPage
