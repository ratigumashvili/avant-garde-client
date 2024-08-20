import MDContent from "../_components/MDContent"
import { getSinglePage } from "../_lib/apiCalls"

const getBibliography = async () => {
    try {
        const response = await getSinglePage('bibliography')
        return response.data
    } catch (error) {
        return error.message
    }
}

async function Bibliography() {
const data = await getBibliography()
    return (
        <div className="p-4">
            <h2 className="font-gordeziani text-4xl font-light mb-4">ქართული ავანგარდისტების არასრული ბიბლიოგრაფია</h2>
            <div className="[&_p]:mb-2 [&_ol]:list-decimal [&_li]:mb-2 font-light pl-4">
                <MDContent content={data?.attributes?.content} />
            </div>
        </div>
    )
}

export default Bibliography