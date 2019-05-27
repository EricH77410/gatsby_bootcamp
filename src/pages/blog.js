import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const renderPost = () => {
    return data.allMarkdownRemark.edges.map((post, index)=>{
      return (
        <li key={index}>
          <h2>{post.node.frontmatter.title}</h2>
          <p>{post.node.frontmatter.date}</p>
        </li>
      )
    })
  }

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {renderPost()}
      </ol>
      
    </Layout>
  )
}

export default BlogPage