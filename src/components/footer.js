import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import footerStyle from './footer.module.scss'

const Footer = () => {

  const data = useStaticQuery(graphql `
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyle.footer}>
      <p>Created by {data.site.siteMetadata.author}, &copy; 2019</p>
      <a href="/">rico@club.fr</a>
    </footer>
  )
}

export default Footer