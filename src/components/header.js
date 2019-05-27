import React from 'react'
import { Link } from 'gatsby'

//import './header.module.scss'
import headerStyle from './header.module.scss'

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <h1>
        <Link className={headerStyle.title} to="/">
          Rico's World
        </Link>
      </h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/contact">Contact</Link>
          </li>
          <li>
            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/about">About Us</Link>
          </li>
        </ul>        
      </nav>
    </header>
  )
}

export default Header