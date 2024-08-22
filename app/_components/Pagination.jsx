'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { FIRST_PAGE, PER_PAGE } from "../_lib/constants"

import IconLeft from "./icons/IconLeft"
import IconRight from "./icons/IconRight"

function Pagination({ currentPage, path, response }) {

    const [current, setCurrent] = useState(+currentPage || 1)

    const router = useRouter()

    const total = response?.meta?.pagination?.total
    const hasNextPage = currentPage * PER_PAGE < total
    const hasPrevPage = currentPage > FIRST_PAGE

    const handlePaginationClick = (direction) => {
        direction === "next" ? setCurrent((prev) => prev + 1) : setCurrent((prev) => prev - 1)
    }

    useEffect(() => {
        router.replace(path + current, { scroll: false })
    }, [current])


    return (
        <div className="flex items-center gap-2 mt-auto">
            {hasPrevPage && (
                <button onClick={() => handlePaginationClick("prev")} className="flex items-center gap-2">
                  <IconLeft /> წინა
                </button>
            )}

            {hasPrevPage && hasNextPage && (' // ')}
            
            {hasNextPage && (
                <button onClick={() => handlePaginationClick("next")} className="flex items-center gap-2">
                    შემდეგი <IconRight />
                </button>
            )}
        </div>
    )
}

export default Pagination