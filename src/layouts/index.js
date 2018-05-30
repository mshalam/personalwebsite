import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header, About, Projects, Resume, Frame } from '../components'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Noelle Laureano"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <About />
    <Projects />
    <Resume />
    <Frame />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {/*{children()}*/}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`