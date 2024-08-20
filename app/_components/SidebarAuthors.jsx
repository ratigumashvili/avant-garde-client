'use client'

import { useEffect, useState } from "react"

import Link from "next/link"

import { getAllAuthors } from "../_lib/apiCalls"

function SidebarAuthors() {

    const [authors, setAuthors] = useState([])

    const getAuthors = async () => {
        const response = await getAllAuthors()
        setAuthors(response.data)
    }

    useEffect(() => {
        getAuthors()
    }, [])

    return (
        <ul className="mb-2">
            {authors && authors.map((author) => (
                <li className="font-firaGo text-[16px] font-light ml-3" key={author.id}>
                    <Link href={`/authors/${author.attributes.slug}`}>{author.attributes.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default SidebarAuthors