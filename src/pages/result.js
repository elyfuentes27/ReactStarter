import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const result = () => (
  <Layout>
    <SEO title="result" />
    <h1>Result</h1>
    <Link to="/question-4/">Go back to Question 4</Link>
    <br/>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default result
