'use client'

import { useState } from 'react'

import Link from 'next/link'

import { navMenu } from '../_lib/constants'

import IconBurger from './icons/IconBurger'
import IconClose from './icons/IconClose'

function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(true)

    function toglleMenu() {
        setMenuOpen((prev) => !prev)
    }

    return (
        <div className='flex gap-2 justify-start p-4'>
            <button className='self-start' onClick={toglleMenu}>
                {menuOpen ? <IconClose width='30' height='30' /> : <IconBurger width='30' height='30' />}
            </button>

            {menuOpen ? (
                <div className='min-w-80'>
                    {navMenu.map(({id, path, title}) => (
                        <h2 key={id} className='font-gordeziani font-light text-3xl mb-3'>
                            <Link href={`${path}`}>{title}</Link>
                        </h2>
                    ))}
                </div>
            ) : <></>}
        </div>
    )
}

export default NavMenu