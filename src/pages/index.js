import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
export default ({ data }) => {
  // console.log(data)
  const post = data.mdx
  return (
      <>
       fsdfsdfsdf
        <MDXRenderer>{post.body}</MDXRenderer>
    </>
  )
}
export const query = graphql`
query{
  mdx(fileAbsolutePath: {regex: "/^.*introduction/README.mdx$/"}) {
    frontmatter {
      title
    }
    body
  }
}
`
