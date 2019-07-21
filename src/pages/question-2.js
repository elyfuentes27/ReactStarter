import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Cta from "../components/cta"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SecondPage = () => {
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
      <div className="body-margin-top" />
      {/* Question 1 */}
      <p>Is your aplication visualizing data?</p>
      <RadioGroup
            aria-label="Form"
            name="form"
            className=""
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="simple" control={<Radio />} label="Simple data sets" />
            <FormControlLabel value="complex" control={<Radio />} label="Complex graphs" />
            <FormControlLabel value="tablets" control={<Radio />} label="Tables and reports" />
      </RadioGroup> 
      {/* Question 2 */}
      <p>Is your app going to be deployed across multiple regions?</p>
      <RadioGroup
            aria-label="Form"
            name="form"
            className=""
            value={value2}
            onChange={handleChange2}
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
            value={value3}
            onChange={handleChange3}
          >
            <FormControlLabel value="single" control={<Radio />} label="Single language" />
            <FormControlLabel value="multiple" control={<Radio />} label="Multiple languages" />
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
}

export default SecondPage
