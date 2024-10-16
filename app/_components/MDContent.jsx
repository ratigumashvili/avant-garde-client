'use client'

import ReactMarkdown from 'react-markdown'

function MDContent({content}) {
  return (
    <div className='[&_p]:mb-4 [&_p]:leading-7 font-light mb-4'>
        <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default MDContent