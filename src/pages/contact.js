import React, { useState } from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import VisibilitySensor from "../components/VisibilitySensor";

function ContactPage() {
  const [projectType, setProjectType] = useState('');

  return (
    <Layout>
      <SiteMetadata title="Contact" />
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">

          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => (
              <div
                className={isVisible ? "slideDown enter max-w-screen-md mx-auto mb-16" : "slideDown max-w-screen-md mx-auto mb-16 prose prose-lg"}
              >
                <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl mb-6">
                  Tell me about your project
                </h1>
                <p className="mb-10 prose-lg">
                  If you are interested in working together, just fill out the form below to help me understand your specific project needs. You can shoot me an <a href="mailto:andersstaylor@gmail.com" className="underline font-semibold">email</a> for any other inquiries. Thanks!
                </p>

                <form
                  className="mx-auto w-full bg-white rounded-lg p-10 shadow-md"
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
                    htmlFor="project-type"
                  >
                    What type of project do you need completed?
                  </label>
                  <select
                    name="project-type"
                    id="project-type"
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full mb-6 form-input border border-gray-600 p-2 rounded focus:outline-black font-medium"
                    required
                  >
                    <option selected disabled value="">Select Project Type</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="New Website">New Website</option>
                    <option value="Other">Other (please specify)</option>
                  </select>
                  {projectType === 'Other' &&
                    <>
                      <label
                        className="hidden"
                        htmlFor="project-type-other"
                      >
                        Specify project type?
                      </label>
                      <input
                        className="w-full mb-6 form-input border border-gray-600 p-2 rounded focus:outline-black font-medium"
                        id="project-type-other"
                        type="text"
                        name="project-type-other"
                        required
                        placeholder="Specify your project type"
                      />
                    </>
                  }

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl"
                    htmlFor="services"
                  >
                    Which services do you need?
                  </label>
                  <select
                    name="services"
                    id="services"
                    className="w-full mb-6 form-input border border-gray-600 p-2 rounded focus:outline-black font-medium"
                    required
                  >
                    <option selected disabled value="">Select Service</option>
                    <option value="Design">Design</option>
                    <option value="Design & Dev">Design & Development</option>
                    <option value="Dev">Development</option>
                  </select>

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl"
                    htmlFor="timeline"
                  >
                    When do you need this project completed?
                  </label>
                  <select
                    name="timeline"
                    id="timeline"
                    className="w-full mb-6 form-input border border-gray-600 p-2 rounded focus:outline-black font-medium"
                    required
                  >
                    <option selected disabled value="">Select Completion Time</option>
                    <option value="Less than 1 month">Less than 1 month</option>
                    <option value="1-2 Months">1-2 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="6 Months +">6 Months +</option>
                  </select>

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl"
                    htmlFor="name"
                  >
                    Name
                  </label>

                  <input
                    className="w-full mb-6 form-input border border-gray-600 p-2 rounded focus:outline-black font-medium"
                    id="name"
                    type="text"
                    name="name"
                    required
                  />

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl"
                    htmlFor="email"
                  >
                    Email Address
                  </label>

                  <input
                    className="w-full mb-6 form-input border border-gray-600 p-2 rounded focus:outline-black font-medium"
                    id="email"
                    type="email"
                    name="email"
                    required
                  />

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl"
                    htmlFor="website-url"
                  >
                    Website URL <span className="font-normal text-lg">(optional)</span>
                  </label>

                  <input
                    className="w-full mb-6 form-input border border-gray-600 p-2 rounded focus:outline-black font-medium"
                    id="website-url"
                    type="url"
                    name="website-url"
                    placeholder="https://example.com"
                  />

                  <label
                    className="block mb-2 font-bold  text-gray-800 text-xl"
                    htmlFor="message"
                  >
                    Additional Details
                  </label>

                  <textarea
                    className="w-full mb-6 form-textarea border border-gray-600 rounded focus:outline-black p-2 font-medium"
                    id="message"
                    rows="4"
                    name="message"
                  />
                  <button type="submit" className="py-3 px-8 font-medium border border-gray-800 text-base rounded-full text-white bg-gray-800 hover:bg-transparent hover:text-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Submit</button>
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
