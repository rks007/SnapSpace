import Image from 'next/image'
import React from 'react'

function Comments() {
  return (
    <div>

        {/* write */}
        <div className=" flex items-center gap-4">

            <Image src="https://images.pexels.com/photos/28580835/pexels-photo-28580835/free-photo-of-white-dog-swimming-with-orange-ball-in-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' height={32} width={32} className=' w-8 h-8 rounded-full'/>

            <div className=" flex flex-1 items-center justify-between bg-slate-200 rounded-xl text-sm px-6 py-2 w-full">
                <input type="text" placeholder='write a comment...' className=' bg-transparent outline-none flex-1' />
                <Image src="/emoji.png" alt='' height={16} width={16} className=' cursor-pointer'/>

            </div>

        </div>

        {/* comments */}
        <div className="">
            {/* comment */}
            <div className=" flex gap-4 justify-between mt-6">

                {/* avatar */}
                <Image src="https://images.pexels.com/photos/28580835/pexels-photo-28580835/free-photo-of-white-dog-swimming-with-orange-ball-in-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' height={40} width={40} className=' w-10 h-10 rounded-full'/>

                {/* Desc */}
                <div className=" flex flex-col gap-2 flex-1">
                    <span className=' font-medium'>mark spencer</span>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur impedit quia quis aut omnis temporibus libero assumenda nihil culpa.</p>
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
        </div>
    </div>
  )
}

export default Comments