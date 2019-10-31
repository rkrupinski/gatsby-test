import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </Layout>
)

export const query = graphql`
  {
    allContentfulPost {
      nodes {
        id
        title
      }
    }
  }
`

export default IndexPage
