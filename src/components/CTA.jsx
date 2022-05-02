import React from "react"
import Button from './Button'
import VisibilitySensor from "./VisibilitySensor";

const CTA = () => {
    return (
        <section className="bg-gray-200 py-16">
            <VisibilitySensor partialVisibility once>
                {({ isVisible }) => (
                    <div
                    className={isVisible ? "slideDown enter" : "slideDown"}
                    >
                        <div className="container prose-lg">
                            <h2 className="text-gray-800 font-semibold">Let's work together.</h2>
                            <Button href="/contact" internal>Get in touch</Button>
                        </div>
                    </div>
                )}
            </VisibilitySensor>
        </section>
    )
}

export default CTA