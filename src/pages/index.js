import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
export default ({ data }) => {
  const post = data.mdx
  return (
        <MDXRenderer>{post.body}</MDXRenderer>
  )
}
export const query = graphql`
query{
  mdx(fileAbsolutePath: {regex: "/^.*introduction/README.mdx$/"}) {
    body
  }
}
`
