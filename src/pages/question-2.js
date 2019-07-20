import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cta from "../components/cta"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SecondPage = () => (
  <Layout>
    <div className="body-margin-top" />
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

    <div className="full-width-ctas">
      <Link to="/">
        <Cta text="Back" arrowType="back"/>
      </Link>

      <Link to="/question-3/">
        <Cta text="Next" arrowType="next"/>
      </Link>
    </div>
    

  </Layout>
)

export default SecondPage
