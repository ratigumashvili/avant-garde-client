"use client"

import { useState, useEffect } from "react"

import { useRouter } from "next/navigation"

import { getAllAuthors, getAllCategories } from "../_lib/apiCalls"

import { Dialog, DialogPanel } from '@headlessui/react'

import IconFilter from "./icons/IconFilter"
import IconClose from "./icons/IconClose"

function Filters() {

    const [isOpen, setIsOpen] = useState(false)

    const [categories, setCategories] = useState([])
    const [authors, setAuthors] = useState([])

    const [selectedCategory, setSelectedCategory] = useState("ყველა")
    const [selectedAuthor, setSelectedAuthor] = useState("ყველა")

    const router = useRouter()

    const getCategories = async () => {
        try {
            const response = await getAllCategories()
            setCategories(response.data)
        } catch (error) {
            return error.message
        }
    }

    const getAuthors = async () => {
        try {
            const response = await getAllAuthors(`pagination[page]=1&pagination[pageSize]=100`)
            setAuthors(response.data)
        } catch (error) {
            return error.message
        }
    }

    useEffect(() => {
        getCategories()
        getAuthors()
    }, [])

    const handleFormsubmit = (e) => {
        e.preventDefault()
       
        const form = new FormData(e.target)

        const query = new URLSearchParams({
            category: form.get("category"),
            author: form.get("author"),
            catDisplay: selectedCategory,
            authDisplay: selectedAuthor
        }).toString()

        setIsOpen(false)
        router.push(`/filtered?${query}`)
    }


    return (
        <div>
            <button onClick={() => setIsOpen(true)} title="ფილტრი">
                <IconFilter />
            </button>

            <Dialog open={isOpen} transition onClose={() => setIsOpen(false)} className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-xl border bg-white p-4 relative">
                        <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2" >
                            <IconClose />
                        </button>
                        <form className="flex flex-col items-start justify-between gap-6 p-4" onSubmit={handleFormsubmit}>
                            <div className="flex flex-col items-start gap-2">
                                <p>კატეგორია</p>
                                <select className="w-full border p-3 rounded-sm" name="category" onChange={(e) => setSelectedCategory(e.target.options[e.target.selectedIndex].text)}>
                                    <option value="all">ყველა</option>
                                    {categories?.length !== 0 && categories.map((category) => (
                                        <option key={category.id} value={category.attributes.slug}>{category.attributes.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col items-start gap-2 w-full">
                                <p>ავტორი</p>
                                <select className="w-full border p-3 rounded-sm" name="author" onChange={(e) => setSelectedAuthor(e.target.options[e.target.selectedIndex].text)}>
                                    <option value="all">ყველა</option>
                                    {authors?.length !== 0 && authors?.map((author) => (
                                        <option key={author.id} value={author.attributes.slug}>{author.attributes.name}</option>
                                    ))}
                                </select>
                            </div>
                            <button className="w-full p-3 flex items-center gap-2 bg-black rounded-sm text-white">
                                <IconFilter /> <span>ფილტრი</span>
                            </button>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

        </div>
    )
}

export default Filters