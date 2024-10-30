import Image from 'next/image'
import React from 'react'

function AddPost() {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>

        {/* Avatar */}
        <Image src="https://images.pexels.com/photos/17702500/pexels-photo-17702500/free-photo-of-dancers-under-the-arched-ceiling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' height={48} width={48} className='w-12 h-12 object-cover rounded-full'/>

        {/* Post */}
        <div className=' flex-1'>
            {/* text input */}
            <div className=' flex gap-4'>
                <textarea placeholder="What's on your mind ?" className=' flex-1 bg-slate-100 rounded-lg p-2'></textarea>
                <Image src="/emoji.png" alt='' height={20} width={20} className='w-5 h-5 cursor-pointer self-end'/>
            </div>
            {/* post options */}
            <div className=' flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image src="/addimage.png" alt='' height={20} width={20}/>
                  Photo
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image src="/addVideo.png" alt='' height={20} width={20}/>
                  Video
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image src="/poll.png" alt='' height={20} width={20}/>
                  Poll
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image src="/addevent.png" alt='' height={20} width={20}/>
                  Event
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost