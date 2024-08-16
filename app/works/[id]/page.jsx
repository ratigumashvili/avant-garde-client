import ContentHeader from "@/app/_components/ContentHeader"
import MDContent from "@/app/_components/MDContent"
import { getWorkById } from "@/app/_lib/apiCalls"

async function page({ params }) {
    const { data: work } = await getWorkById(params.id)

    return (
        <div className="p-4 w-full">

            <ContentHeader
                author={work?.attributes?.author?.data?.attributes?.name}
                title={work?.attributes?.title}
            />

            <div className="[&_p]:mb-2 font-light mb-4">
                <MDContent content={work?.attributes?.content} />
            </div>

        </div>
    )
}

export default page