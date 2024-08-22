import Link from "next/link"

import { getWorksBySlug } from "../_lib/apiCalls"

async function Manifests() {

    const response = await getWorksBySlug('maniphesti')

    return (
        <div className="p-4">

            <h2 className="font-gordeziani text-4xl font-light mb-4">მანიფესტები</h2>

            <ul>
                {response.data.data.map((manifest) => (
                    <li key={manifest.id} className="my-2 list">
                        <Link href={`/manifests/${manifest.id}`}>{manifest.attributes.title}</Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Manifests