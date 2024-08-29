"use client"

import { useState } from "react"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { setActive } from "../_lib/helpers"
import { navMenu } from '../_lib/constants'

function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen((prev) => !prev)

    return (
        <div className="flex justify-start items-start gap-2 w-[30px] md:w-max">
            <button className="md:hidden mt-8 text-black w-15 h-15 ml-3 relative focus:outline-none bg-white z-20" onClick={toggleMenu}>
                <span className="sr-only">Open main menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" className={`block absolute h-0.5 w-6 bg-current transform transition duration-75 ease-in-out ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                    <span aria-hidden="true" className={`block absolute h-0.5 w-6 bg-current transform transition duration-75 ease-in-out ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span aria-hidden="true" className={`block absolute h-0.5 w-6 bg-current transform transition duration-75 ease-in-out ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                </div>
            </button>

            <div className="flex flex-col gap-4 w-max pr-8">
                <NavDesktop />
                <NavMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>

        </div>
    )
}

function NavDesktop() {
    const pathName = usePathname()
    return <div className="hidden md:flex md:flex-col gap-4 p-4">
        {navMenu.map(({ id, path, title }) => (
            <h2 key={id} className='font-gordeziani font-light text-3xl'>
                <Link href={`${path}`} className={`${setActive(pathName, path)} relative`}>{title}</Link>
            </h2>
        ))}
    </div>
}

function NavMobile({ menuOpen, setMenuOpen }) {

    const router = useRouter()
    const pathName = usePathname()

    const navigate = (path) => {
        router.replace(path)
        setMenuOpen(false)
    }

    return <div className="md:hidden w-[10px] z-10">
        <div className={`${menuOpen ? 'w-screen min-h-screen opacity-100 p-4 pr-8 flex flex-col gap-4 bg-white transition-opacity ease-in duration-100' : 'opacity-0 h-0 overflow-hidden'}`}>
            {navMenu.map(({ id, path, title }) => (
                <h2 key={id} className='font-gordeziani font-light text-3xl'>
                    <button onClick={() => navigate(`${path}`)} className={`${setActive(pathName, path)} relative`}>{title}</button>
                </h2>
            ))}
        </div>
    </div>
}



export default NavMenu