import Link from "next/link"
import { getSinglePage } from "../_lib/apiCalls"

async function Resources() {
    const response = await getSinglePage('resource?populate=*')
    return (
        <div className="p-4 w-full">
            <h2 className="font-gordeziani text-4xl font-light mb-4">რესურსები</h2>

            <ul>
                {response?.data?.attributes?.resource?.map((res) => (
                    <li key={res.id} className="list my-2">
                        <Link href={res.url} target="blank">{res.title}</Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Resources