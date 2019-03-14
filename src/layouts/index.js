import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from 'gatsby'

import Transition from "../components/transition"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../components/all.sass'

const TemplateWrapper = ({ children, location }) => (
  <StaticQuery query={graphql`
      query TestQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
 render={data => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />

      <link r el="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="/img/og-image.jpg" />
    </Helmet>

    <Navbar />
      <Transition location={location}>
        {children}
      </Transition>
    <Footer />

  </div>
 )}
 />
);

// this is important or it don't work!
TemplateWrapper.defaultProps = { location: {} }

export default TemplateWrapper