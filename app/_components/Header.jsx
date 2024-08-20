'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import IconSearch from './icons/IconSearch'
import Image from 'next/image'

function Header() {

    const [searchInput, setSearchInput] = useState('')

    const router = useRouter()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        router.push(`/search?query=${searchInput}`)
        setSearchInput('')
    }

    return (
        <div className='p-4 flex justify-between border-b flex-col lg:flex-row items-center'>
            <h1 className="font-gordeziani font-light text-5xl md:text-6xl mb-3 md:mb-0 flex items-center gap-4">
              <Image src="/iliauni-logo_eng.png" width={70} height={70} alt="ISU logo" className='grayscale' /> ქართული ფუტურიზმის 100 წელი
            </h1>
            <form onSubmit={handleFormSubmit}>
                <div className='flex items-center gap-2'>
                    <input
                        type="text"
                        className='min-w-64 py-2 px-3 rounded-md border font-light outline-none focus:outline-none placeholder:text-gray-300 placeholder:font-light placeholder:text-sm'
                        placeholder='ნაწარმოების სახელწოდება'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type='submit' disabled={!searchInput}>
                        <IconSearch width={'26'} heigth={'26'} />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Header