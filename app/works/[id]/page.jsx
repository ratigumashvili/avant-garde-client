import ContentHeader from "@/app/_components/ContentHeader"
import MDContent from "@/app/_components/MDContent"
import NothingFound from "@/app/_components/NothingFound"
import { getWorkById } from "@/app/_lib/apiCalls"

async function page({ params }) {

    const data = await getWorkById(params.id)

    if(!data) return <NothingFound />

    return (
        <div className="p-4 w-full">

            <ContentHeader
                author={data?.data?.attributes?.authors?.data[0]?.attributes?.name}
                title={data?.data?.attributes?.title}
            />

            <div className="[&_p]:mb-2 font-light mb-4">
                <MDContent content={data?.data?.attributes?.content} />
            </div>

        </div>
    )
}

export default page