import Link from 'next/link'

import { getWorkByCategory } from '@/app/_lib/apiCalls'
import ContentHeader from '@/app/_components/ContentHeader'
import Pagination from '@/app/_components/Pagination'
import { PER_PAGE } from '@/app/_lib/constants'

async function page({ params, searchParams }) {

    const currentPage = Number(searchParams.page || 1)

    const response = await getWorkByCategory(params.slug, params.category, `pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)


    if (!response?.data?.length) {
        return <h2 className='font-gordeziani text-2xl font-light p-4'>
            არაფერი მოიძებნა
        </h2>
    }

    return (
        <div className='p-4 w-full flex flex-col'>

            <ContentHeader
                author={response?.data[0]?.attributes?.authors?.data[0]?.attributes?.name}
            />

            <ul className='h-full'>
                {response?.data?.length && response.data.map((work) => (
                    <li key={work.id} className='my-2'>
                        <Link href={`/works/${work.id}`}>{work.attributes.title}</Link>
                    </li>
                ))}
            </ul>

            <Pagination
                path={`/authors/${params.slug}/${params.category}?page=`}
                currentPage={currentPage}
                response={response}
            />


        </div>
    )
}

export default page