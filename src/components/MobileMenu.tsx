"use client"
import Link from "next/link";
import { useState } from "react"


function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
        <div className="flex flex-col cursor-pointer gap-[4.5px]" onClick={() => setIsOpen((prev) => !prev)}>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ${isOpen ? "rotate-45" : ""} ease-in-out duration-500`}/>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""} ease-in-out duration-500`}/>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ${isOpen ? "-rotate-45" : ""} ease-in-out duration-500`}/>
        </div>
        {isOpen && (
            <div className=" absolute left-0 top-24 w-full h-[cal(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
                <Link href="/">Home</Link>
                <Link href="/">Friends</Link>
                <Link href="/">Groups</Link>
                <Link href="/">Stories</Link>
                <Link href="/">Login</Link>
            </div>
        )}

    </div>
  )
}

export default MobileMenu