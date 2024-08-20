import MDContent from "../_components/MDContent"
import { getSinglePage } from "../_lib/apiCalls"


async function About() {

    const { data } = await getSinglePage('about')

    return (

        <div className="p-4">
            <h2 className="font-gordeziani text-4xl font-light mb-4">პროექტის შესახებ</h2>
            <div className="[&_p]:mb-2 font-light">
                <MDContent content={data?.attributes?.content} />
            </div>
        </div>

    )
}

export default About