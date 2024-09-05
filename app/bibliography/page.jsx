import MDContent from "../_components/MDContent"
import { getSinglePage } from "../_lib/apiCalls"

async function Bibliography() {

    const response = await getSinglePage('bibliography')

    return (
        <div className="p-4">
            <h2 className="font-gordeziani text-4xl font-light mb-4">ქართული ავანგარდისტების არასრული ბიბლიოგრაფია</h2>
            <div className="[&_ol]:list-decimal [&_li]:mb-2 ml-4">
                <MDContent content={response?.data?.attributes?.content} />
            </div>
        </div>
    )
}

export default Bibliography