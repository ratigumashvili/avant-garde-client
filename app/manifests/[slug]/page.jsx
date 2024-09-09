import Link from "next/link"

import { getManifestById } from "@/app/_lib/apiCalls"

import ContentHeader from "@/app/_components/ContentHeader"
import MDContent from "@/app/_components/MDContent"

async function SingleManifest({ params }) {

    const response = await getManifestById(params.slug)

    return (
        <div className="p-4 w-full">

            <ContentHeader
                author={response?.data?.attributes?.title}
            />
            <div className="mb-6">
                <MDContent content={response?.data?.attributes?.content} />
            </div>
            {response?.data?.attributes?.authors?.data?.length !== 0 && (

                <>
                    <h2 className="font-gordeziani text-4xl font-light mb-4">ავტორი</h2>

                    <ul>
                        {response?.data?.attributes?.authors?.data?.map((author) => (
                            <li key={author.id} className="my-2">
                                <Link href={`/authors/${author.attributes.slug}`}>{author.attributes.name}</Link>
                            </li>
                        ))}
                    </ul>
                </>

            )}

        </div>


    )
}

export default SingleManifest