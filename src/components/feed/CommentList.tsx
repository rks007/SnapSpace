"use client"

import { addComment } from "@/lib/action";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react";

type CommentWithUser = Comment & {user:User};

const CommentList = ({comments, postId}: {comments:CommentWithUser[], postId:number}) => {

    const {user} = useUser();

    const [commentState, setCommmetState] = useState(comments)
    const[desc, setDesc] = useState("")

    const add = async () => {
        if(!user || !desc){
            return;
        }
        addOptimisticComments({
            id: Math.random(),
            desc,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
            userId: user.id,
            postId: postId,
            user: {
                id: user.id,
                username:"Sending Please Wait",
                avatar: user.imageUrl || "/noAvatar.png",
                cover:"",
                description:"",
                name:"",
                surname:"",
                city:"",
                work:"",
                school:"",
                website:"",
                createdAt: new Date(Date.now()),
            }
        })
        
        try {
            const createdComment = await addComment(postId, desc);
            setCommmetState(prev => [createdComment, ...prev])
        } catch (error) {
            console.log(error);
            
        }
    }

    const [optimisticComments, addOptimisticComments] = useOptimistic(commentState, (state, value:CommentWithUser) => [value, ...state] )

  return (
    <>
        {user && <div className=" flex items-center gap-4">

            <Image src={user.imageUrl || "/noAvatar.png"} alt='' height={32} width={32} className=' w-8 h-8 rounded-full'/>

            <form action={add} className=" flex flex-1 items-center justify-between bg-slate-200 rounded-xl text-sm px-6 py-2 w-full">
                <input type="text" placeholder='write a comment...' className=' bg-transparent outline-none flex-1' onChange={e => setDesc(e.target.value)} />
                <Image src="/emoji.png" alt='' height={16} width={16} className=' cursor-pointer'/>

            </form>

        </div>}

        {/* comments */}
        <div className="">
            {/* comment */}
            {optimisticComments.map(comment => (

             <div className=" flex gap-4 justify-between mt-6" key={comment.id}>

                {/* avatar */}
                <Image src={comment.user.avatar || "/noAvatar.png"} alt='' height={40} width={40} className=' w-10 h-10 rounded-full'/>

                {/* Desc */}
                <div className=" flex flex-col gap-2 flex-1">
                    <span className=' font-medium'>{(comment.user.name && comment.user.surname) ? comment.user.name + " " + comment.user.surname : comment.user.username}</span>
                    <p className="">{comment.desc}</p>
                    <div className=" flex items-center gap-5 text-xs text-gray-500 mt-2">
                        <div className=" flex items-center gap-4">
                        <Image src="/like.png" alt='' height={12} width={12} className='cursor-pointer w-3 h-3'/>
                        </div>
                        <span className=''>|</span>
                        <span className=''>123 Likes</span>
                        <div className=''>Reply</div>
                    </div>
                    
                </div>
                
                {/* Icon */}
                <Image src="/more.png" alt='' height={16} width={16} className='cursor-pointer w-4 h-4'/>
                
            </div>
            ))
            }
        </div>
    </>    
  )
}

export default CommentList
