import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Cta from "../components/cta"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FourthPage = () => {
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
        <p>Do have specific design needs (custom design)?</p>
        <RadioGroup
            aria-label="Form"
            name="form"
            className=""
            value={value}
            onChange={handleChange}
            >
            <FormControlLabel value="lowLevel" control={<Radio />} label="Low level of customization" />
            <FormControlLabel value="HighLevel" control={<Radio />} label="High level of customization" />
        </RadioGroup> 
        {/* Question 2 */}
        <p>Approximate number of components including nested components</p>
        <RadioGroup
            aria-label="Form"
            name="form"
            className=""
            value={value2}
            onChange={handleChange2}
            >
            <FormControlLabel value="30selected" control={<Radio />} label="30" />
            <FormControlLabel value="10moreSelected" control={<Radio />} label="10+" />
            <FormControlLabel value="300orMoreSelected" control={<Radio />} label="300+" />
        </RadioGroup> 
        {/* Question 3 */}
        <p>Does your application requires themes?</p>
        <RadioGroup
            aria-label="Form"
            name="form"
            className=""
            value={value3}
            onChange={handleChange3}
            >
            <FormControlLabel value="singleTheme" control={<Radio />} label="Single theme" />
            <FormControlLabel value="multipleThemes" control={<Radio />} label="Multiple themes" />
            <FormControlLabel value="noTheme" control={<Radio />} label="No" />
        </RadioGroup> 

        <div className="full-width-ctas">
        <Link to="/result/">
            <Cta text="Finish" arrowType="next"/>
        </Link>
        </div>
    </Layout>
    )
  }

export default FourthPage
