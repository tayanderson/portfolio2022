import React from 'react'

const TextBlock = ({ block }) => (
  <div className="mb-12">
    <div
      className="content prose prose-lg prose-headings:text-gray-800"
      dangerouslySetInnerHTML={{ __html: block.text.childMarkdownRemark.html }}
    />
  </div>
)

export default TextBlock
