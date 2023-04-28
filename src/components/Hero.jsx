import React from "react"
import VisibilitySensor from "./VisibilitySensor";

const Hero = () => (
  <div className="container py-12 lg:py-32">
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <div
          className={isVisible ? "slideDown enter" : "slideDown"}
        >
        <h1 className="w-full md:w-9/12" data-sal="fade" data-sal-easing="ease">
            <div className="text-3xl sm:text-4xl font-bold !leading-[1.25] tracking-tight text-gray-800 block">
              I'm a designer & web developer that works with founders, brands, artists, restaurants and bars to create thoughtful web experiences.
            </div>
        </h1>
      </div>
    )}
  </VisibilitySensor>
  </div>
)

export default Hero
