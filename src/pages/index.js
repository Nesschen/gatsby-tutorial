// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Two swans swimming on a river"
        src="../images/swans.jpeg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage