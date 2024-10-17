import Link from "next/link"

import { getAllWorks, getFilteredCategory, getFilteredWorks, getWorkByAuthor } from "../_lib/apiCalls"

import Pagination from "../_components/Pagination"
import NothingFound from "../_components/NothingFound"
import Filters from "../_components/Filters"

import { separate } from "../_lib/helpers"
import { PER_PAGE } from "@/app/_lib/constants"

async function Filtered({ searchParams }) {

    const currentPage = Number(searchParams.page || 1)

    let response

    if (searchParams.category === 'all' && searchParams.author === 'all') {
        response = await getAllWorks(`pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)
    }

    if (searchParams.author === 'all' && searchParams.category !== 'all') {
        response = await getFilteredCategory(searchParams.category, `pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)
    }

    if (searchParams.category !== 'all' && searchParams.author !== 'all') {
        response = await getFilteredWorks(searchParams.category, searchParams.author, `pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)
    }

    if (searchParams.category === 'all' && searchParams.author !== 'all') {
        response = await getWorkByAuthor(searchParams.author, `pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)
    }

    const query = new URLSearchParams({
        category: searchParams?.category,
        author: searchParams?.author,
        catDisplay: searchParams?.catDisplay,
        authDisplay: searchParams?.authDisplay
    }).toString()

    return (
        <div className="w-full p-4 flex flex-col">

            <div className="flex items-center justify-between gap-2">
                <h2 className="font-gordeziani text-4xl font-light mb-4">ფილტრის შედეგები</h2>
                <Filters />
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h2 className="font-light">კატეგორია: &#34;{searchParams?.catDisplay}&#34; // ავტორი: &#34;{searchParams?.authDisplay}&#34;</h2>
            </div>
            
            <div className="h-full mb-8">

                {response?.data?.length === 0 && <NothingFound title="არაფერი მოიძებნა. გთხოვთ, სცადოთ სხვა პარამეტრები" />}

                <ul>
                    {response?.data?.length !== 0 && response?.data?.map((item) => (
                        <li key={item.id} className="my-2 list">
                            <Link href={`/works/${item.id}`}>
                                {item?.attributes?.authors?.data?.map((author, index) => (
                                    <span key={author.id}>{author.attributes.name}{separate(item?.attributes?.authors?.data, index)}</span>
                                ))}
                                <em>{item?.attributes?.title}</em>
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>

            <Pagination
                path={`/filtered?${query}&page=`}
                currentPage={currentPage}
                response={response}
            />
        </div>
    )
}

export default Filtered