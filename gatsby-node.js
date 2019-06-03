const path = require('path')

/* module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
} */

/* module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get Path to template
  const blogTemplate = path.resolve('./src/templates/blog.js')

  // Get Markdown Data
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Create new page
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
  
} */

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get Path to template
  const blogTemplate = path.resolve('./src/templates/blog.js')

  // Get Markdown Data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Create new page
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
  
}