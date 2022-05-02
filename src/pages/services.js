import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"
import VisibilitySensor from "../components/VisibilitySensor";
import Cta from "../components/CTA";

const technologies = {
  cms: [
    {
      name: 'Forestry',
      website: 'https://forestry.io/'
    },
    {
      name: 'Netlify CMS',
      website: 'https://www.netlifycms.org/'
    },
    {
      name: 'Contentful',
      website: 'https://contentful.com/'
    }
  ],
  ssg: [
    {
      name: 'React',
      website: 'https://reactjs.org/'
    },
    {
      name: 'Next.js',
      website: 'https://nextjs.org/'
    },
    {
      name: 'Gatsby',
      website: 'gatsbyjs.com'
    },
    {
      name: 'Eleventy',
      website: 'https://www.11ty.dev/'
    },
  ],
  deployment: [
    {
      name: 'Netlify',
      website: 'https://www.netlify.com/'
    },
    {
      name: 'Vercel',
      website: 'https://vercel.com/'
    }
  ]
}

const TextBlock = ({ children }) => (
  <div className="mb-12">
    <div
      className="content prose prose-lg">{children}</div>
  </div>
)

const Services = () => {

  return (
    <Layout>
      <SiteMetadata
        title="Services"
      />

      <div className="bg-gray-100">
        <div className="container py-12 lg:pb-24">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">

            <VisibilitySensor partialVisibility once>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "slideDown enter" : "slideDown"}
                >
                  <section>
                    <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl mb-10">
                      Services
                    </h1>

                    <TextBlock>
                      <h2 className="text-gray-800">Jamstack Web Development</h2>
                      <p>I specialize in developing secure and highly performant websites using the <a href="https://jamstack.wtf/">Jamstack</a>. The Jamstack is a modern web development architecture that is decoupled, static-first and progressively-enhanced. Using this approach, I'm able to create websites that are fast, secure, easily scalable and inexpensive. Fast and secure sites lead to better user experiences, higher SEO rankings and happy customers.</p>
                    </TextBlock>
                  </section>

                  <section>
                    <TextBlock>
                      <h3 className="text-gray-800">Technologies I Use</h3>
                      <p>I utilize a variety of the latest web tools to deliver the web solutions that best fit your unique business needs. I work with you to choose the right combination of modern web tools for your needs. These are the tools I work with most often:</p>
                    </TextBlock>

                    <div className="-mt-4 border-y border-gray-300 py-6">
                      <h4 className="font-semibold pb-5 text-lg">Headless Content Management Systems</h4>
                      <div className="flex flex-wrap -mb-6">
                        {technologies.cms.map(item => (
                          <a href={`${item.website}`} className="bg-gray-300 px-4 py-1 rounded-full font-thin text-gray-800 tracking-wide hover:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out mr-6 mb-6">
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="border-b border-gray-300 py-6">
                      <h4 className="font-semibold pb-5 text-lg">Static Site Generators / Frameworks</h4>
                      <div className="flex flex-wrap -mb-6">
                        {technologies.ssg.map(item => (
                          <a href={`${item.website}`} className="bg-gray-300 px-4 py-1 rounded-full  font-thin text-gray-800 tracking-wide hover:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out mr-6 mb-6">
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="border-b border-gray-300 py-6">
                      <h4 className="font-semibold pb-5 text-lg">Deployment Platforms</h4>
                      <div className="flex flex-wrap -mb-6">
                        {technologies.deployment.map(item => (
                          <a href={`${item.website}`} className="bg-gray-300 px-4 py-1 rounded-full  font-thin text-gray-800 tracking-wide hover:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out mr-6 mb-6">
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>

                  </section>


                </div>
              )}
            </VisibilitySensor>

          </div>
        </div>
        <Cta />
      </div>
    </Layout>
  )
}

export default Services