/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Button from '@material-ui/core/Button';
import Link from './Link';
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main style={{ marginTop: 50, background: '#C0C2C9', height: '100vh', paddingLeft: 15 }}>
          <div style={{ width: '100%', height: 15 }}></div>
          {children}
          <BottomNavigation>
            { location !== 'login' && (
              <Container>
                <Button>
                  <Link to="/Login">
                    Login/Sign Up
                  </Link>
                </Button>
                <Typography variant="p">
                  for administrative tasks
                </Typography>
              </Container>
            )}
          </BottomNavigation>
        </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
