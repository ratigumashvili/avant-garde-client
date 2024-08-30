import Link from 'next/link'

import { getAuthor } from '@/app/_lib/apiCalls'
import { removeDuplicates } from '@/app/_lib/helpers'
import MDContent from '@/app/_components/MDContent'
import ContentHeader from '@/app/_components/ContentHeader'
import Image from 'next/image'

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
    <div className='p-4 w-full'>

      <div className='flex flex-col md:flex-row gap-4 mb-4'>

        {author[0]?.attributes?.photo?.data?.attributes?.url && (
          <div>
            <Image
              src={author[0].attributes.photo.data.attributes.url}
              alt={author[0].attributes.name}
              width={100}
              height={100}
              className='w-full md:w-80 h-100 md:h-80 object-cover'
            />

          </div>
        )}


        <div className='w-full'>
          <ContentHeader author={author[0]?.attributes?.name} />

          <h3 className='mb-4'>{author[0]?.attributes?.dates}</h3>

          <div className="mb-6">
            <MDContent content={author[0]?.attributes?.bio} />
          </div>
        </div>

      </div>

      <h2 className='font-gordeziani text-3xl font-light'>შრომები</h2>

      <ul className='mt-2'>
        {filteredCategories.map((cat, index) => (
          <li key={index} className='mb-2 list'>
            <Link href={`/authors/${params.slug}/${cat.category}`}>{cat.title}</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default page