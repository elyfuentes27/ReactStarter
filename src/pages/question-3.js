import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Arrow from "../components/arrow"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ThirdPage = () => (
  <Layout>
    <div className="body-margin-top" />
    {/* Question 1 */}
    <p>Does your app needs animations and transitions?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Animations" />
          <FormControlLabel value="male" control={<Radio />} label="Transitions" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
    </RadioGroup> 
    {/* Question 2 */}
    <p>Do users have different permissions across the app?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Multiple types of users" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
    </RadioGroup> 
    {/* Question 3 */}
    <p>Does your app will be updated in real time?</p>
    <RadioGroup
          aria-label="Form"
          name="form"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Request based" />
          <FormControlLabel value="male" control={<Radio />} label="Real Time" />
    </RadioGroup> 

    <Link to="/question-2">
      <span>Back</span>   
      <Arrow type="back"/>
    </Link>

    <Link to="/question-4/">
      <span>Next</span>  
      <Arrow type="next"/>
    </Link>
    
  </Layout>
)

export default ThirdPage
