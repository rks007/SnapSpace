"use client"

import { switchLike } from "@/lib/action";
import { useAuth } from "@clerk/nextjs"
import Image from "next/image"
import { useOptimistic, useState } from "react";

function PostInteraction({postId, likes, commentNumber}: {postId: number, likes: string[], commentNumber:number}) {

    const {isLoaded, userId} = useAuth();
    
    const [likeState, setLikeState] = useState({
        likeCount: likes.length,
        isLiked: userId ? likes.includes(userId) : false
    })

    const [optimisticLike, switchOptimisticLike] = useOptimistic(likeState, (state, value) => {
        return {
            likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
            isLiked: !state.isLiked
        }
    })

    const likeAction = async () => {
        switchOptimisticLike("")
        try {
            switchLike(postId)
            setLikeState((state) => ({
                likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
                isLiked: !state.isLiked
            }))
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div className=" flex items-center justify-between text-sm my-4">
            
            {/* left side */}
            <div className="flex gap-8">
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                    <form action={likeAction}>
                        <button>
                          <Image src={optimisticLike.isLiked ? "/liked.png" : "/like.png"} alt='' height={16} width={16} className=' cursor-pointer'/>
                        </button>
                    </form>
                  <span className='text-gray-300'>|</span>
                  <span className='text-gray-500'>{optimisticLike.likeCount} <span className='hidden md:inline'>Likes</span></span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                  <Image src="/comment.png" alt='' height={16} width={16} className=' cursor-pointer'/>
                  <span className='text-gray-300'>|</span>
                  <span className='text-gray-500'>{commentNumber} <span className='hidden md:inline'>Comments</span></span>
                </div>
            </div>
            
            {/* right side */}
            <div className="">
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                  <Image src="/share.png" alt='' height={16} width={16} className=' cursor-pointer'/>
                  <span className='text-gray-300'>|</span>
                  <span className='text-gray-500'><span className='hidden md:inline'>Share</span></span>
                </div>
            </div>
        </div>
  )
}

export default PostInteraction