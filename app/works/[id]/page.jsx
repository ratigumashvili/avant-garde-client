import { getWorkById } from "@/app/_lib/apiCalls"

import MDContent from "@/app/_components/MDContent"

import ContentHeader from "@/app/_components/ContentHeader"
import ImageGallery from "@/app/_components/ImageGallery"
import NothingFound from "@/app/_components/NothingFound"

async function SingleWork({ params }) {

    const response = await getWorkById(params.id)

    if (!response) return <NothingFound />

    return (
        <div className="p-4 w-full">
            <ContentHeader
                author={response?.data?.attributes?.authors?.data[0]?.attributes?.name}
                title={response?.data?.attributes?.title}
            />

            <MDContent content={response?.data?.attributes?.content} />

            {response?.data?.attributes?.images?.data && (
                <ImageGallery images={response?.data?.attributes?.images?.data} />
            )}

        </div>
    )
}

export default SingleWork