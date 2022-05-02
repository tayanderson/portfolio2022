import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import VisibilitySensor from "./VisibilitySensor";

const Grid = ({ items, title })=> {
  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <VisibilitySensor partialVisibility once delayedCall={true}>
          {({ isVisible }) => (
            <div
              className={isVisible ? "fadeIn enter" : "fadeIn"}
            >
              {title && (
                <h2 className="text-2xl sm:text-3xl leading-tight font-semibold text-gray-800 mb-8">
                  { title }
                </h2>
              )}
            </div>
          )}
        </VisibilitySensor>
        <div className="grid h-full grid-cols-1 md:grid-cols-5 md:grid-rows-8 gap-20">
          {items.map((item, index) => {
            const thumbnail = getImage(item.thumbnail)
            return (
            <Link to={`/${item.slug}`} key={item.id} className={index % 3 === 0 ? "portfolio-item wide" : "portfolio-item medium"}>
              <VisibilitySensor partialVisibility once delayedCall={true}>
                {({ isVisible }) => (
                  <div
                    className={isVisible ? "fadeIn enter" : "fadeIn"}
                  >
                  {item.thumbnail && (
                    <GatsbyImage
                      image={thumbnail}
                      alt={item.name} />
                  )}
                  <div className="group">
                    <Link to={`/${item.slug}`}>
                      <div className="pt-4">
                        <h1 className="sm:text-2xl text-gray-800 font-semibold">{item.name}</h1>
                        <p className="text-base sm:text-lg text-gray-600 font-medium">{item.summary}</p>
                      </div>
                    </Link>
                  </div>
                </div>
                )}
              </VisibilitySensor>
            </Link>
          )})}
        </div>
      </div>
    </div>
  )
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Grid