import PropTypes from "prop-types"
import React from "react"

import Footer from "../components/Footer"
import Header from "../components/Header"


const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <div className="flex-1 pt-24">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
