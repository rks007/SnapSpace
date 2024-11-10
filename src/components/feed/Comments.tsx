import prisma from '@/lib/client'
import Image from 'next/image'
import React from 'react'
import CommentList from './CommentList'

async function Comments({postId}:{postId:number}) {

    const comments = await prisma.comment.findMany({
        where: {
            postId: postId
        },
        include: {
            user: true
        }
    })

  return (
    <div>

        {/* write */}
        <CommentList comments={comments} postId={postId} />
    </div>
  )
}

export default Comments