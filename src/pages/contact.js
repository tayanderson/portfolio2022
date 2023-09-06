import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import VisibilitySensor from "../components/VisibilitySensor";

function ContactPage() {
  return (
    <Layout>
      <SiteMetadata title="contact" />
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">

          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => (
              <div
                className={isVisible ? "slideDown enter max-w-screen-md mx-auto mb-16" : "slideDown max-w-screen-md mx-auto mb-16 prose prose-lg"}
              >
                <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl mb-6">
                  Contact
                </h1>

                <p className="mb-10 prose-lg">You can get in touch with me by sending a message using the form below or shooting me an <a href="mailto:andersstaylor@gmail.com" className="underline font-semibold">email</a>.</p>

                <form
                  className="mx-auto w-full"
                  method="post"
                  netlify-honeypot="bot-field"
                  name="contact"
                  data-netlify="true"
                  action="/thank-you"
                >
                  <p class="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>                  
                  <input type="hidden" name="form-name" value="contact" />

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl"
                    htmlFor="name"
                  >
                    Name
                  </label>

                  <input
                    className="w-full mb-6 form-input p-2 focus:outline-black"
                    id="name"
                    type="text"
                    name="name"
                    required
                  />

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl p-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>

                  <input
                    className="w-full mb-6 form-input p-2 focus:outline-black"
                    id="email"
                    type="email"
                    name="email"
                    required
                  />

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl p-2"
                    htmlFor="message"
                  >
                    Message
                  </label>

                  <textarea
                    className="w-full mb-6 form-textarea focus:outline-black p-2"
                    id="message"
                    rows="8"
                    name="message"
                    required
                  />
                  <button type="submit" className="py-3 px-8 font-medium border border-gray-800 text-base rounded-full text-white bg-gray-800 hover:bg-transparent hover:text-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Send Message</button>
                </form>
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
