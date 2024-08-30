import Link from "next/link"

import { getAllWorks } from "../_lib/apiCalls"

import Pagination from "../_components/Pagination"

import { PER_PAGE } from "@/app/_lib/constants"
import { separate } from "../_lib/helpers"

import NothingFound from "../_components/NothingFound"
import Filters from "../_components/Filters"

async function AllWorks({ searchParams }) {

  const currentPage = Number(searchParams.page || 1)

  const response = await getAllWorks(`pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)

  if (response.data.length === 0) {
    return <NothingFound />
  }

  return (
    <div className='w-full p-4 flex flex-col'>

      <div className="flex items-start justify-between">
        <h2 className="font-gordeziani text-4xl font-light mb-4">ნამუშევრები</h2>
        <div className="pt-1">
          <Filters />
        </div>
      </div>

      <ul className="h-full">
        {response?.data.map((work) => (
          <li key={work.id} className="my-2 list">
            <Link href={`/works/${work.id}`}>
              {work?.attributes?.authors?.data?.map((author, index) => (
                <span key={author.id}>{author.attributes.name}{separate(work?.attributes?.authors?.data, index)} </span>
              ))}
              <em>{work?.attributes?.title}</em>
            </Link>
          </li>
        ))}
      </ul>

      <Pagination
        path={`/works?page=`}
        currentPage={currentPage}
        response={response}
      />
    </div>
  )
}

export default AllWorks