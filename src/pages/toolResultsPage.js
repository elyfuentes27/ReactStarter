import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import allCommands from '../common/toolsResults'

const result = () => (
  <Layout>
    <SEO title="tool result" />
    <h1>Tools Link</h1>
    <div>
        {allCommands.map( (i, index) => 
            <div>
            <h3>{i.name}</h3>
                <div>
                    {i.links.map( list => <a href={list.link} target="_blank"><li>{list.name}</li></a>)}
                </div>
            </div>
            )}
    </div>
    <br/>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default result