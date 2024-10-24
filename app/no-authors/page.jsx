import Link from "next/link"

import Pagination from "../_components/Pagination"

import { getNoAuthorWork } from "../_lib/apiCalls"
import { PER_PAGE } from "../_lib/constants"


async function NoAuthors({ searchParams }) {

  const currentPage = Number(searchParams.page || 1)

  const response = await getNoAuthorWork(`pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)

  return (
    <div className="p-4 w-full flex flex-col">
      <h2 className="font-gordeziani text-4xl font-light mb-4">უავტორო ჩანაწერები</h2>
      <div className="h-full">

        <ul className='h-full'>
          {response?.data?.length !== 0 && response.data.map((work) => (
            <li key={work.id} className='my-2 list'>
              <Link href={`/texts/${work.id}`}>{work.attributes.title}</Link>
            </li>
          ))}
        </ul>

      </div>

      <Pagination
        path={`/no-authors?page=`}
        currentPage={currentPage}
        response={response}
      />
    </div>
  )
}

export default NoAuthors