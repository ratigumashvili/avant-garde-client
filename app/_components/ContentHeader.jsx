'use client'

import { useRouter } from "next/navigation"
import IconBack from "./icons/IconBack"

function GoBack() {
    const router = useRouter()
    return (
        <button onClick={() => router.back()} title="უკან" className="pt-1">
            <IconBack />
        </button>
    )
}

function ContentHeader({ author, title }) {

    return (
        <div className="flex items-start justify-between mb-4">
            <h2 className='font-gordeziani text-4xl font-light'>
                {author} {author && title ? (`// ${title}`) : title}
            </h2>
            <GoBack />
        </div>
    )
}

export default ContentHeader