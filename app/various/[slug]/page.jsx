import Link from "next/link"

import { getWorkByVarious } from "@/app/_lib/apiCalls"

import ContentHeader from "@/app/_components/ContentHeader"
import NothingFound from "@/app/_components/NothingFound"

import { PER_PAGE } from "@/app/_lib/constants"
import Pagination from "@/app/_components/Pagination"


async function page({ params, searchParams }) {

    const currentPage = Number(searchParams.page || 1)

    const response = await getWorkByVarious(params.slug, `pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)

    if (!response.data.data.length) return <NothingFound />

    return (
        <div className="p-4 w-full flex flex-col">

            <ContentHeader title={response?.data?.data[0]?.attributes?.category?.data?.attributes?.title} />

            <div className='h-full'>
                <ul>
                    {response?.data?.data?.map((work) => (
                        <li key={work.id} className='my-2'>
                            <Link href={`/works/${work.id}`}>{work.attributes.title}</Link>
                        </li>
                    ))}
                </ul>

            </div>

            <Pagination
                path={`/various/${params.slug}?page=`}
                currentPage={currentPage}
                response={response?.data}
            />

        </div>
    )
}

export default page