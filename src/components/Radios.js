import React from "react"
import { Link } from "gatsby"

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const IndexPage = () => (
  <Layout>
    <RadioGroup
          aria-label="Gender"
          name="gender1"
          className=""
          value=""
          onChange=""
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
    </RadioGroup>    
  </Layout>
)

export default IndexPage
