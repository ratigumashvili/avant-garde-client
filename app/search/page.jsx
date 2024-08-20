import { redirect } from "next/navigation"

import { getWorkByTitle } from '../_lib/apiCalls'

async function SearchPage({searchParams}) {
    const response = await getWorkByTitle(searchParams.query)

    if (!searchParams.query) {
        redirect('/')
    }

    return (
        <div className='w-full p-4'>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h2 className="font-light">ძიების პარამეტრი: "{searchParams.query}"</h2>
            </div>
            {!response.data.length && <h2 className='font-gordeziani text-3xl font-light'>არაფერი მოიძებნა. გთხოვთ, სცადოთ სხვა პარამეტრი</h2>}
            search {JSON.stringify(response, null, 2)}
        </div>
    )
}

export default SearchPage