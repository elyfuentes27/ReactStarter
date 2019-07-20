import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Arrow from "../components/arrow"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi</h1>
    <p>Welcome to ReactStarter.</p>
    <p>Comming Soon</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/question-2/"> <Arrow type="next"/></Link>
    <Arrow type="back" />
  </Layout>
)

export default IndexPage
