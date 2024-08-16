import Link from 'next/link'

import { getWorkByCategory } from '@/app/_lib/apiCalls'
import ContentHeader from '@/app/_components/ContentHeader'

async function page({ params }) {

    const { data: works } = await getWorkByCategory(params?.slug, params?.category)

    if (!works.length) {
        return <h2 className='font-gordeziani text-2xl font-light p-4'>
            არაფერი მოიძებნა
        </h2>
    }

    return (
        <div className='p-4 w-full'>

            <ContentHeader
                author={works[0].attributes?.author?.data?.attributes?.name}
            />

            <ul>
                {works.length && works.map((work) => (
                    <li key={work.id} className='my-2'>
                        <Link href={`/works/${work.id}`}>{work.attributes.title}</Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default page