import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page 3" />
    <h1>Third Question</h1>
    <p>3</p>
    <Link to="/question-2/">Go back to Question 2</Link>
    <br/>
    <Link to="/question-4/">Go to Question 4</Link>
  </Layout>
)

export default ThirdPage
