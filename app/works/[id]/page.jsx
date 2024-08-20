import ContentHeader from "@/app/_components/ContentHeader"
import MDContent from "@/app/_components/MDContent"
import NothingFound from "@/app/_components/NothingFound"
import { getWorkById } from "@/app/_lib/apiCalls"
import Image from "next/image"

async function page({ params }) {

    const response = await getWorkById(params.id)

    if(!response) return <NothingFound />

    return (
        <div className="p-4 w-full">

            <ContentHeader
                author={response?.data?.attributes?.authors?.data[0]?.attributes?.name}
                title={response?.data?.attributes?.title}
            />

            <div className="[&_p]:mb-2 font-light mb-4">
                <MDContent content={response?.data?.attributes?.content} />
            </div>

            {response?.data?.attributes?.images && response?.data?.attributes?.images?.data?.map((image) => (
                <div key={image.id}>
                    <Image src={image.attributes.url} width={150} height={150} alt={image.attributes.alternativeText} />
                    <p>{image?.attributes?.caption}</p>
                </div>
            ))}

            {/* {JSON.stringify(response?.data?.attributes?.images?.data, null, 2)} */}

        </div>
    )
}

export default page