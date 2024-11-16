"use client"

import { deletePost } from "@/lib/action";
import Image from "next/image";
import { useState } from "react"

const PostInfo = ({postId}:{postId:number}) => {

    const [open, setOpen] = useState(false);

    const deletePostWithId = deletePost.bind(null, postId);

  return (
    <div className="relative">
        <Image src="/more.png" alt='' height={16} width={16} className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
            <div className=" absolute top-4 right-0 bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-30">
                <span className="cursor-pointer">View</span>
                <span className="cursor-pointer">Re-post</span>
                <form action={deletePostWithId}>
                    <button className="text-red-500">
                        Delete
                    </button>
                </form>
            </div>
        )}
    </div>
  )
}

export default PostInfo