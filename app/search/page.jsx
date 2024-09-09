import { redirect } from "next/navigation"
import Link from "next/link"

import { getWorkByTitle } from '../_lib/apiCalls'

import NothingFound from "../_components/NothingFound"
import Pagination from "../_components/Pagination"

import { PER_PAGE } from "@/app/_lib/constants"
import { separate } from "../_lib/helpers"

async function SearchPage({ searchParams }) {

    const currentPage = Number(searchParams.page || 1)

    const response = await getWorkByTitle(searchParams.query, `pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)

    if (!searchParams.query) {
        redirect('/')
    }

    return (
        <div className='w-full p-4 flex flex-col'>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h2 className="font-light">ძიების პარამეტრი: &#34;{searchParams.query}&#34;. ნაპოვნია {response.data.length} ჩანაწერი</h2>
            </div>

            {!response.data.length && <NothingFound title="არაფერი მოიძებნა. გთხოვთ, სცადოთ სხვა პარამეტრი" />}

            <ul className="h-full">
                {response?.data?.map((work) => (
                    <li key={work.id} className="my-2 list">
                        <Link href={`/works/${work.id}`}>
                            {work.attributes.authors.data.length !== 0 && work.attributes.authors.data.map((author, index) => (
                                <span key={author.id}> {author.attributes.name}{separate(work?.attributes?.authors?.data, index)}</span>
                            ))}
                            <em>{work.attributes.title}</em>
                        </Link>
                    </li>
                ))}
            </ul>

            <Pagination
                path={`/search?query=${searchParams.query}&page=`}
                currentPage={currentPage}
                response={response}
            />
        </div>
    )
}

export default SearchPage