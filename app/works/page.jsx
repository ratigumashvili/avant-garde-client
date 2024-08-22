import Link from "next/link"

import { getAllWorks } from "../_lib/apiCalls"

import Pagination from "../_components/Pagination"

import { PER_PAGE } from "@/app/_lib/constants"
import NothingFound from "../_components/NothingFound"

async function AllWorks({ searchParams }) {

  const currentPage = Number(searchParams.page || 1)

  const response = await getAllWorks(`pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)

  if(response.data.length === 0){
    return <NothingFound />
  }

  return (
    <div className='w-full p-4 flex flex-col'>

      <h2 className="font-gordeziani text-4xl font-light mb-4">ნამუშევრები</h2>

      <ul className="h-full">
        {response?.data.map((work) => (
          <li key={work.id} className="my-2 list">
            <Link href={`/works/${work.id}`}>
              {work?.attributes?.authors?.data?.map((author) => (
                <em key={author.id}>{author.attributes.name} // </em>
              ))}
              {work?.attributes?.title}
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