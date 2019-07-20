import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Page 4" />
    <h1>Fourth Question</h1>
    <p>4</p>
    <Link to="/question-3/">Go back to Question 3</Link>
    <br/>
    <Link to="/result/">See Results</Link>
  </Layout>
)

export default FourthPage
