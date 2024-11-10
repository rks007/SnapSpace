import Image from 'next/image'
import React from 'react'
import Comments from './Comments'
import { Post as PostType, User } from '@prisma/client'

type FeedPostType = PostType & {user:User} & {likes:[{userId:string}]} & {_count:{comments:number}}

function Post({post}:{post: FeedPostType}) {
  return (
    <div className='flex flex-col gap-4'>

        {/* User */}
        <div className='flex justify-between items-center'>
            <div className="flex items-center gap-4">
                <Image src={post.user.avatar || "/noAvatar.png"} alt='' height={40} width={40} className='w-10 h-10 rounded-full'/>
                <span className='font-medium'>{(post.user.name && post.user.surname) ? post.user.name + " " + post.user.surname : post.user.username}</span>
            </div>
            <div>
            <Image src="/more.png" alt='' height={16} width={16}/>
            </div>
        </div>

        {/* description */}
        <div className=' flex flex-col gap-4'>
            {post.img && <div className="w-full min-h-96 relative">
              <Image src={post.img} alt='image of the post' fill className=' object-cover rounded-md'/>
            </div>}
            <p>{post.desc}</p>
        </div>

        {/* interaction like likes and all */}
        <div className=" flex items-center justify-between text-sm my-4">
            
            {/* left side */}
            <div className="flex gap-2">
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                  <Image src="/like.png" alt='' height={16} width={16} className=' cursor-pointer'/>
                  <span className='text-gray-300'>|</span>
                  <span className='text-gray-500'>100 <span className='hidden md:inline'>Likes</span></span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                  <Image src="/comment.png" alt='' height={16} width={16} className=' cursor-pointer'/>
                  <span className='text-gray-300'>|</span>
                  <span className='text-gray-500'>100 <span className='hidden md:inline'>Comments</span></span>
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
        <Comments/>
    </div>
  )
}

export default Post