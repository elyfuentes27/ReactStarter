import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Cta from "../components/cta"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ThirdPage = () => {
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
        <p>Does your app needs animations and transitions?</p>
        <RadioGroup
            aria-label="Form"
            name="form"
            className=""
            value={value}
            onChange={handleChange}
            >
            <FormControlLabel value="animation" control={<Radio />} label="Animations" />
            <FormControlLabel value="transitions" control={<Radio />} label="Transitions" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup> 
        {/* Question 2 */}
        <p>Does users have different permissions across the app?</p>
        <RadioGroup
            aria-label="Form"
            name="form"
            className=""
            value={value2}
            onChange={handleChange2}
            >
            <FormControlLabel value="multipleTypes" control={<Radio />} label="Multiple types of users" />
            <FormControlLabel value="noPermission" control={<Radio />} label="No" />
        </RadioGroup> 
        {/* Question 3 */}
        <p>Does your app will be updated in real time?</p>
        <RadioGroup
            aria-label="Form"
            name="form"
            className=""
            value={value3}
            onChange={handleChange3}
            >
            <FormControlLabel value="requestBased" control={<Radio />} label="Request based" />
            <FormControlLabel value="RealTime" control={<Radio />} label="Real Time" />
        </RadioGroup> 

        <div className="full-width-ctas">
        <Link to="/">
            <Cta text="Back" arrowType="back"/>
        </Link>

        <Link to="/question-4/">
            <Cta text="Next" arrowType="next"/>
        </Link>
        </div>
        
    </Layout>
    )
}

export default ThirdPage
