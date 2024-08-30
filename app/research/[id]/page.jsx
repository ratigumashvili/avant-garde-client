import ContentHeader from "@/app/_components/ContentHeader"
import MDContent from "@/app/_components/MDContent"
import { getWorkById } from "@/app/_lib/apiCalls"

async function SingleResearch({ params }) {

    const response = await getWorkById(params.id)
    
    return (
        <div className="p-4 w-full">
            
            <ContentHeader title={response?.data?.attributes?.title} />

            <MDContent content={response?.data?.attributes?.content} />
            
        </div>
    )
}

export default SingleResearch