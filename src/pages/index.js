import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Cta from "../components/cta"
import SEO from "../components/seo"

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';






const IndexPage = () => {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleChange2(event) {
    setValue2(event.target.value);
  }
  function handleChange3(event) {
    setValue3(event.target.value);
  }
  return (
    <Layout>
        <SEO title="Home" />
        <div className="body-margin-top" />
        {/* <h1>Hi</h1> */}
        <p>Welcome to ReactStarter. We kindly ask you to respond some questions in order to provide you some react recommendations.</p>
        {/* Question 1 */}
        <p>Does your application requires forms?</p>
        <RadioGroup
              aria-label="Form"
              name="form"
              className=""
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="Simple form" control={<Radio />} label="Simple form" />
              <FormControlLabel value="Multiple forms" control={<Radio />} label="Multiple forms" />
              <FormControlLabel value="none" control={<Radio />} label="None" />
        </RadioGroup> 
        {/* Question 2 */}
        <p>Does your application requires routing?</p>
        <RadioGroup
              aria-label="Form"
              name="form"
              className=""
              value={value2}
              onChange={handleChange2}
            >
              <FormControlLabel value="Simple routing" control={<Radio />} label="Simple routing" />
              <FormControlLabel value="Nested routing" control={<Radio />} label="Nested routing" />
              <FormControlLabel value="male" control={<Radio />} label="No" />
        </RadioGroup> 
        {/* Question 3 */}
        <p>Approximate number of states</p>
        <RadioGroup
              aria-label="Form"
              name="form"
              className=""
              value={value3}
              onChange={handleChange3}
            >
              <FormControlLabel value="5" control={<Radio />} label="<5" />
              <FormControlLabel value="5more" control={<Radio />} label="5+" />
              <FormControlLabel value="10more" control={<Radio />} label="10+" />
        </RadioGroup> 
        <div className="full-width-ctas">
          <Link to="/question-2/">
            <Cta text="Next" arrowType="next" />
          </Link>
        </div>
        <Link to="/toolResultsPage/"> Tools </Link>
      </Layout>
  )
}

export default IndexPage
