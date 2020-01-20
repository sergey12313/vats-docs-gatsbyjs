import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data }) => {
  console.log(data)
  const post = data.mdx
  return (
      <MDXRenderer>{post.body}</MDXRenderer>

  )
}
export const query = graphql`
  query($slug: String!) {
    mdx(fileAbsolutePath: { regex: $slug }) {
      body
    }
  }
`
