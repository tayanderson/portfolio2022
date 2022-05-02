import { graphql } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

import Cards from "../components/Cards"
import ImageBlock from "../components/ImageBlock"
import TextBlock from "../components/TextBlock"
import Cta from "../components/CTA";

import {GatsbyImage, getImage} from "gatsby-plugin-image"

import VisibilitySensor from "../components/VisibilitySensor";

const PortfolioTemplate = ({ data }) => {
  const {
    description,
    name,
    related,
    summary,
    thumbnail,
    url,
    contentBlocks,
    role,
  } = data.contentfulPortfolio

  const image = getImage(thumbnail);

  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={summary}
        image={thumbnail && (image)}
      />
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">

          <VisibilitySensor once>
            {({ isVisible }) => (
              <div
                className={isVisible ? "slideDown enter max-w-screen-md mx-auto mb-16" : "slideDown max-w-screen-md mx-auto mb-16"}
              >
                <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl mb-1">
                  {name}
                </h1>
                {description && (
                  <div className="my-4 text-xl text-gray-700 whitespace-pre-line">
                    {description.description}
                  </div>
                )}
                {role && (
                  <div className="my-8 text-lg">
                    <div className="text-gray-700 font-semibold">Role</div>
                    <ul className="role-list whitespace-pre-line text-gray-700">
                    {role.map(r =>
                      <li className="inline-block">{r}</li>
                    )}
                    </ul>
                  </div>
                )}
                {url && (
                  <div className="mt-8">
                    <a href={url} className="arrow-link" target="_blank" rel="noreferrer">View Project</a>
                  </div>
                )}
              </div>
            )}
          </VisibilitySensor>
            
            {thumbnail && (
            <GatsbyImage
              image={image}
              alt={name}
              className="mb-12" />
            )}
            {contentBlocks &&
              contentBlocks.map(block => {
                switch (block.type) {
                  case 'ContentfulBlockImage':
                    return <ImageBlock block={block} />
                  case 'ContentfulBlockText':
                    return <TextBlock block={block} />
                  default:
                    return ''
                }
              })
            }

        </div>
      </div>
      {related && (
        <div className="bg-gray-100 py-12 lg:py-16">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-gray-900 mb-8">
              You may also like
            </h2>
          </div>
          <Cards items={related} hideLastItemOnMobile={true} />
        </div>
      )}
      <Cta />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioItemQUery($slug: String!) {
    contentfulPortfolio(slug: { eq: $slug }) {
      description {
        description
      }
      role
      contentBlocks {
        type: __typename
        ... on Node {
          ... on ContentfulBlockImage {
            images {
              gatsbyImageData(
                  width: 960
                  quality: 85
                )
            }
            maxWidth
          }
          ... on ContentfulBlockText {
						text {
              childMarkdownRemark {
                html
              }
						}
          }
        }
      }
      name
      related {
        ...PortfolioCard
      }
      summary
      thumbnail {
        gatsbyImageData(
          width: 1500
          quality: 85
        )
        publicUrl
      }
      url
    }
  }
`

export default PortfolioTemplate
