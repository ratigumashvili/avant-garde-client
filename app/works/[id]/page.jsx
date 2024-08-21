import ContentHeader from "@/app/_components/ContentHeader"
import ImageGallery from "@/app/_components/ImageGallery"
import MDContent from "@/app/_components/MDContent"
import NothingFound from "@/app/_components/NothingFound"
import { getWorkById } from "@/app/_lib/apiCalls"

async function page({ params }) {

    const response = await getWorkById(params.id)

    if (!response) return <NothingFound />

    return (
        <div className="p-4 w-full">

            <ContentHeader
                author={response?.data?.attributes?.authors?.data[0]?.attributes?.name}
                title={response?.data?.attributes?.title}
            />

            <div className="[&_p]:mb-2 font-light mb-4">
                <MDContent content={response?.data?.attributes?.content} />
            </div>

            {response?.data?.attributes?.images?.data && (
                <ImageGallery images={response?.data?.attributes?.images?.data} />
            )}

        </div>
    )
}

export default page