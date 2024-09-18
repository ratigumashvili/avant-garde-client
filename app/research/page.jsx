import Link from "next/link"

import { getWorksBySlug } from "../_lib/apiCalls"

import Pagination from "../_components/Pagination"

import { PER_PAGE } from "@/app/_lib/constants"

async function Research({searchParams}) {

    const currentPage = Number(searchParams.page || 1)

    const response = await getWorksBySlug(`tanamedrove-kvlevebi`, `pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)

    return (
        <div className="p-4 w-full flex flex-col">
            <h2 className="font-gordeziani text-4xl font-light mb-4">კვლევები</h2>

            <ul className="h-full">
                {response?.data?.map((research) => (
                    <li key={research.id} className="my-2 list">
                        <Link href={`/research/${research.id}`}>
                            {research.attributes.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <Pagination
                path={`/research?page=`}
                currentPage={currentPage}
                response={response.data}
            />

        </div>
    )
}

export default Research