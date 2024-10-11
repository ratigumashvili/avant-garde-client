"use client"

import IconUp from "./icons/IconUp";

function ScrollTop() {

    const isBrowser = () => typeof window !== undefined

    const scrollToTop = () => {
        if (!isBrowser()) return
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="flex items-end justify-end">
            <button onClick={scrollToTop}>
                <IconUp />
            </button>
        </div>
    )
}

export default ScrollTop