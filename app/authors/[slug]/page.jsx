import Link from 'next/link'

import { getAuthor } from '@/app/_lib/apiCalls'
import { removeDuplicates } from '@/app/_lib/helpers'
import MDContent from '@/app/_components/MDContent'

async function page({ params }) {
  const { data: author } = await getAuthor(params.slug)

  if (!author.length) {
    return <h2 className='font-gordeziani text-2xl font-light p-4'>
      არაფერი მოიძებნა
    </h2>
  }

  const categories = author[0]?.attributes?.works?.data?.map((work) => ({ title: work?.attributes?.category?.data?.attributes?.title, category: work?.attributes?.category?.data?.attributes?.slug }))

  const filteredCategories = removeDuplicates(categories)

  return (
    <div className='p-4'>

      <h2 className='font-gordeziani text-4xl font-light mb-4'>
        {author[0]?.attributes?.name}
      </h2>

      <div className="[&_p]:mb-2 font-light mb-6">
        <MDContent content={author[0]?.attributes?.bio} />
      </div>

      <h2 className='font-gordeziani text-3xl font-light'>შრომები</h2>

      <ul className='mt-2'>
        {filteredCategories.map((cat, index) => (
          <li key={index} className='mb-2 font-firaGo font-light'>
            <Link href={`/authors/${params.slug}/${cat.category}`}>{cat.title}</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default page