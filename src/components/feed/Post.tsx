import Image from 'next/image'
import React from 'react'
import Comments from './Comments'
import { Post as PostType, User } from '@prisma/client'
import PostInteraction from './PostInteraction'

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
        <PostInteraction postId={post.id} likes={post.likes.map((like) => like.userId)} commentNumber={post._count.comments} />
        <Comments/>
    </div>
  )
}

export default Post