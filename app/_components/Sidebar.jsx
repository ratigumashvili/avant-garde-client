import Link from "next/link"
import { getAllAuthors } from "../_lib/apiCalls"

async function Sidebar() {

    const { data: authors } = await getAllAuthors()

    return (
        <div className="p-4 min-w-80">
            <h2 className="font-gordeziani font-light text-3xl">
                <Link href={'/'}>მთავარი</Link>
            </h2>
            <h2 className="font-gordeziani font-light text-3xl">მანიფესტი</h2>
            <h2 className="font-gordeziani font-light text-3xl">ავტორები</h2>
            <ul>
                {authors.map((author) => (
                    <li className="my-2" key={author.id}>
                        <Link href={`/authors/${author.attributes.slug}`}>{author.attributes.name}</Link>
                    </li>
                ))}
            </ul>
            <h2 className="font-gordeziani font-light text-3xl">
                <Link href={'/about'}>პროექტის შესახებ</Link>
            </h2>
        </div>
    )
}

export default Sidebar