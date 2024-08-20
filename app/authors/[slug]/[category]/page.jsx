import Link from 'next/link'

import { getWorkByCategory } from '@/app/_lib/apiCalls'
import ContentHeader from '@/app/_components/ContentHeader'

async function page({ params }) {

    const response = await getWorkByCategory(params.slug, params.category)
  
  
    if (!response?.data?.length) {
        return <h2 className='font-gordeziani text-2xl font-light p-4'>
            არაფერი მოიძებნა
        </h2>
    }

    return (
        <div className='p-4 w-full'>

            <ContentHeader
                author={response?.data[0]?.attributes?.authors?.data[0]?.attributes?.name}
            />

            <ul>
                {response?.data?.length && response.data.map((work) => (
                    <li key={work.id} className='my-2'>
                        <Link href={`/works/${work.id}`}>{work.attributes.title}</Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default page