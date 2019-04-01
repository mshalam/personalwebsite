import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import {
  Header,
  About,
  Extra,
  Projects,
  Resume,
  Frame,
  Footer,
} from './components'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Maurice Shalam"
      meta={[
        { name: 'description', content: 'Check me out' },
        { name: 'keywords', content: 'Maurice Shalam' },
      ]}
    />
    <Header />
    <About />
    {/* <Extra /> */}
    <Projects />
    <Resume />
    {/* <Frame /> */}
    <Footer />
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

// <div
// style={{
//   margin: '0 auto',
//   maxWidth: 960,
//   padding: '0px 1.0875rem 1.45rem',
//   paddingTop: 0,
// }}
// >
//  {/*{children()}*/}
// </div>
