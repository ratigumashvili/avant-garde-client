import Link from "next/link"

import { getVariousCategories } from "../_lib/apiCalls"

async function Various() {

  const response = await getVariousCategories()

  return (
    <div className="p-4">
      <h2 className="font-gordeziani text-4xl font-light mb-4">სხვადასხვა</h2>
      <ul>
        {response?.data?.length !== 0 && response?.data?.map((category) => (
          <li key={category?.id} className="my-2 list">
          <Link href={`various/${category.attributes.slug}`}>{category.attributes.title}</Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Various