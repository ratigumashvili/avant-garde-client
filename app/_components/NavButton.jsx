"use client"

import { usePathname, useRouter, useSelectedLayoutSegment } from 'next/navigation'

function NavButton({ path, setMenuOpen, children }) {

    const segment = useSelectedLayoutSegment()
    const pathname = usePathname()
    const router = useRouter()

    const isActive = path === `/${segment}`

    const navigate = (path) => {
        router.replace(path, { scroll: false })
        setMenuOpen(false)
    }

    return (
        <button
            className={`relative ${isActive || pathname === path ? "font-normal" : ""}`}
            onClick={() => navigate(`${path}`)}
        >
            {children}
        </button>
    )
}

export default NavButton