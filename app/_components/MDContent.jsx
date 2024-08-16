'use client'

import ReactMarkdown from 'react-markdown'

function MDContent({content}) {
  return (
    <div>
        <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default MDContent