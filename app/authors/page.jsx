import Image from "next/image"

import { getAllAuthors } from "../_lib/apiCalls"
import Link from "next/link"

import { PER_PAGE } from "@/app/_lib/constants"
import Pagination from "../_components/Pagination"

async function page({ searchParams }) {

    const currentPage = Number(searchParams.page || 1)

    const response = await getAllAuthors(`pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)

    return (
        <div className="p-4 w-full flex flex-col">
            <h2 className="font-gordeziani text-4xl font-light mb-4">ავტორები</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full mb-8">
                {response?.data?.map((author) => (
                    <Link key={author.id} href={`/authors/${author.attributes.slug}`} className="flex flex-col gap-2 text-center mb-4">
                        {author?.attributes?.photo?.data?.attributes?.url ? (
                            <Image className="w-full h-80 object-cover" src={author?.attributes?.photo?.data?.attributes?.url} alt={author.attributes.name} width={100} height={100} />
                        ) : (
                            <Image className="w-full h-80 object-contain border grayscale p-8" src='/iliauni-logo_eng.png' alt={author.attributes.name} width={100} height={100} />
                        )}
                        {author.attributes.name}
                    </Link>
                ))}
            </div>

            <Pagination
                path={`/authors?page=`}
                currentPage={currentPage}
                response={response}
            />

        </div>
    )
}

export default page