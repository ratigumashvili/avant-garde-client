'use client'

import ReactMarkdown from 'react-markdown'

function MDContent({ content }) {
  return (
    <ReactMarkdown>{content}</ReactMarkdown>
  )
}

export default MDContent