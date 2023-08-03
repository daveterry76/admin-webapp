import React from 'react'

const Profile = () => {
  // console.log(profile);
  
  return (
    <>
      <div className='bg-white rounded-md flex justify-between w-[35%] px-6 py-2'>
        <div className='flex cursor-pointer'>
          <div className='mr-3'>
            <img className='h-8 w-8 bg-[#699BF72B] rounded-full' src='https://i.ibb.co/fFN64cS/profile-img.png' alt='profile img' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>
            {/* {profile.given_name || 'User'} */}
            User

            </h3>
            <p className='text-[10px] opacity-70'>
            {/* {profile.email || 'User'} */}
            Email
            </p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-3 opacity-80 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

      </div>
    </>
  )
}

export default Profile