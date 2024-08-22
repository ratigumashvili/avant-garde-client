'use client'

import { useState } from "react"

import Link from "next/link"

import { navMenu } from "../_lib/constants"
import { Menu, X} from "lucide-react"

function SidebarNew() {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  function toggleMenu() {
    setSidebarOpen((prevState) => !prevState)
  }

  return (
    <>
      <div className={`h-full pl-2 left-0 top-0 flex flex-col items-start gap-4 pt-6 bg-black text-white ${sidebarOpen ? 'w-80' : 'w-12'}`}>
        
        <button onClick={toggleMenu}>
          {sidebarOpen ? <X /> : <Menu />}
        </button>

        {navMenu.map(({ id, path, title, icon }) => (
          <div key={id}>
            <Link href={`${path}`} title={title} className="flex items-center gap-4">
              {icon} {sidebarOpen && <h2 className="font-gordeziani text-2xl font-light">{title}</h2>}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default SidebarNew