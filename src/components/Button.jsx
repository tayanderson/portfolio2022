import PropTypes from "prop-types"
import React from "react"

const Button = ({ children, href, internal, ...params }) => {
  const className =
    "inline-block py-3 px-8 font-medium border border-gray-800 text-base rounded-full text-white bg-gray-800 hover:bg-transparent hover:text-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"

  if (href) {
    return (
      <a
        href={href}
        target={!internal ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button className={className} {...params}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

Button.defaultProps = {
  href: null,
}

export default Button
