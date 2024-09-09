"use client"

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import MDContent from './MDContent'
import IconClose from './icons/IconClose'

import { getSinglePage } from '../_lib/apiCalls'
import { getCurrentYear } from '../_lib/helpers'

function EngModal() {
    const [data, setData] = useState()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        async function getEngDescription() {
            const response = await getSinglePage('eng-description')
            setData(response.data)
        }
        getEngDescription()
    }, [])

    return (
        <>
            {data?.attributes?.content && <button onClick={() => setIsOpen(true)} className='w-max'>
                <h2 className='font-gordeziani font-light text-3xl'>
                    ENG
                </h2>
            </button>}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 w-screen overflow-y-auto p-4 bg-black/50">
                    <div className="flex min-h-full items-center justify-center">
                        <DialogPanel className="w-full space-y-4 border bg-white p-12 relative">

                            <button
                                onClick={() => setIsOpen(false)}
                                className='absolute top-10 right-10'>
                                <IconClose width='32' height='32' />
                            </button>

                            <DialogTitle className="font-gordeziani font-light text-5xl">{data?.attributes?.title}</DialogTitle>

                            <MDContent content={data?.attributes?.content} />

                            <div className='flex items-center justify-between flex-col md:flex-row gap-4 pt-8 border-t'>
                                <div className="flex items-center gap-2">
                                    <Link href={"https://iliauni.edu.ge/en"} target="blank">
                                        <Image src="/iliauni-logo_eng.png" width={50} height={50} alt="ISU logo" className="grayscale" />
                                    </Link>
                                    <Link href={'mailto:dh@iliauni.edu.ge'}>
                                        <Image src={"/dh-isu.svg"} width={70} height={70} alt="DH logo" className="grayscale" />
                                    </Link>
                                </div>
                                <p className="font-light text-xs">
                                    &copy; {getCurrentYear()} Ilia State University. <Link href={"https://research.iliauni.edu.ge/en/institution/3-shedarebiti-literaturis-instituti"} target="blank">Institute of Comparative Literature</Link>
                                </p>
                            </div>

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default EngModal