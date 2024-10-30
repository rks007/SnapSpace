import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Ad from './Ad'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'

function RightMenu({userId}: {userId?: string}) {
  return (
    <div className='flex flex-col gap-6'>
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests/>
      <Birthdays/>
      <Ad size="md" />
    </div>
  )
  
}

export default RightMenu