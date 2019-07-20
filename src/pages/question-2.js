import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Second Question</h1>
    <p>2</p>
    <Link to="/">Go back to the homepage</Link>
    <br/>
    <Link to="/question-3/">Go to question 3</Link>
  </Layout>
)

export default SecondPage
