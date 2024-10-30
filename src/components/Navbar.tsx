"use client"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react"

function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">

        {/* left */}
        <div className=" md:hidden lg:block w-[20%]">
            <Link href="/" className="font-bold text-xl text-blue-700">SnapSpace</Link>
        </div>

        {/* centre */}
        <div className=" hidden md:flex w-[50%] items-center justify-between">
            <div className=" flex gap-6 text-gray-600">
                <Link href="/" className="flex gap-2 items-center">
                <Image src="/home.png" alt="homePage-icon" width={16} height={16} className="w-4 h-4"/>
                <span>HomePage</span>
                </Link>

                <Link href="/" className="flex gap-2 items-center">
                <Image src="/friends.png" alt="Friends-icon" width={16} height={16} className="w-4 h-4"/>
                <span>Friends</span>
                </Link>

                <Link href="/" className="flex gap-2 items-center">
                <Image src="/stories.png" alt="Stories-icon" width={16} height={16} className="w-4 h-4"/>
                <span>Stories</span>
                </Link>

                <div className=" hidden xl:flex p-2 bg-slate-100 items-center rounded-xl m-5">
                    <input type="text" placeholder="search..." className=" bg-transparent outline-none" />
                    <Image src="/search.png" alt="" height={14} width={14}/>
                </div>
            </div>

        </div>

        {/* right */}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
            <ClerkLoading> {/*clerkloading when the authentication part is going on, so till then what you want to show */}
              <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </ClerkLoading>
            <ClerkLoaded> {/* clerkloaded means the authentication check has done, now show what you want after the auth check */}
                <SignedIn> {/* if you are signed in, then show this */}
                    <div className=" cursor-pointer">
                        <Image src="/people.png" alt="" width={24} height={24}/>
                    </div>
                    <div className=" cursor-pointer">
                        <Image src="/messages.png" alt="" width={20} height={20}/>
                    </div>
                    <div className=" cursor-pointer">
                        <Image src="/notifications.png" alt="" width={20} height={20}/>
                    </div>
                    <UserButton/>
                </SignedIn>
                <SignedOut> {/* if you are not signed in then show this */}
                    <div className=" cursor-pointer flex items-center gap-2">
                        <Image src="/login.png" alt="" width={20} height={20}/>
                        <Link href="/sign-in">Login/Register</Link>
                    </div>
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu/>
        </div>

    </div>
  )
}

export default Navbar