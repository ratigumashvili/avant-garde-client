"use client"

import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'

function Navlink({ href, children }) {

    const segment = useSelectedLayoutSegment()
    const pathname = usePathname()
    
    const isActive = href === `/${segment}`

    return (
        <Link className={`relative ${isActive || pathname === href ? "font-normal" : ""}`} href={href}>
            {children}
        </Link>
    )
}

export default Navlink