import Link from "next/link"
import { variousMenu } from "../_lib/constants"

function Various() {
  return (
    <div className="p-4">
      <h2 className="font-gordeziani text-4xl font-light mb-4">სხვადასხვა</h2>
      <ul className="[&_li]:mb-2">
        {variousMenu.map(({id, path, slug, title}) => (
          <li key={id}>
            <Link href={`${path}/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Various