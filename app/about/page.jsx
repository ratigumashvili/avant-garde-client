import MDContent from "../_components/MDContent"
import { getSinglePage } from "../_lib/apiCalls"


async function About() {

    const { data } = await getSinglePage('about')
    
    return (

        <div className="[&_p]:mb-2 font-light p-4">
            <MDContent content={data?.attributes?.content} />
        </div>

    )
}

export default About