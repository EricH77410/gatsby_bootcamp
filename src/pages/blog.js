import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import blogStyle from './blog.module.scss'

const BlogPage = () => {
/* 
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields{slug}
          }
        }
      }
    }
  `) */

  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields: publishedDate,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `)

  console.log(data)

  const renderPost = () => {
    return data.allContentfulBlogPost.edges.map((post, index)=>{
      return (
        <li key={index} className={blogStyle.post}>
          <Link to={`/blog/${post.node.slug}`}>
            <h2>{post.node.title}</h2>
            <p>{post.node.publishedDate}</p>
          </Link>
        </li>
      )
    })
  }

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>
        {renderPost()}
      </ol>
      
    </Layout>
  )
}

export default BlogPage