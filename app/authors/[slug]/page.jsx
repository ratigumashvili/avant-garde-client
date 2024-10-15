import Link from 'next/link'
import Image from 'next/image'

import { getAuthor } from '@/app/_lib/apiCalls'
import { removeDuplicates, uniqueCount } from '@/app/_lib/helpers'

import MDContent from '@/app/_components/MDContent'
import ContentHeader from '@/app/_components/ContentHeader'
import ScrollTop from '@/app/_components/ScrollTop'
import NothingFound from '@/app/_components/NothingFound'

async function page({ params }) {
  const { data: author } = await getAuthor(params.slug)

  if (!author.length) {
    return <h2 className='font-gordeziani text-2xl font-light p-4'>
      <NothingFound />
    </h2>
  }

  const categories = author[0]?.attributes?.works?.data?.map((work) => {
    return {
      title: work?.attributes?.category?.data?.attributes?.title,
      slug: work?.attributes?.category?.data?.attributes?.slug
    }
  })

  const categoriesArray = uniqueCount(categories)

  const filteredCategories = Object.values(categoriesArray);

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

          <ul className='mt-2'>
            {filteredCategories.map((cat, index) => (
              <li key={index} className='mb-2 list'>
                <Link href={`/authors/${params.slug}/${cat.slug}`}>{cat.title}</Link>
                {/* <span className='absolute -top-1 ml-1 text-xs'>{cat.count}</span> */}
              </li>
            ))}
            <li className='list'>
              <Link href={'#bio'} scroll={true}>ბიოგრაფია</Link>
            </li>
          </ul>

        </div>

      </div>

      <div className="mb-6 mt-12" id='bio'>
        <MDContent content={author[0]?.attributes?.bio} />
      </div>

      <ScrollTop />

    </div>
  )
}

export default page