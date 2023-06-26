import React from 'react'

const PendingOrder = () => {
  return (
    <>
        <div className='rounded-md bg-white p-4 mt-4 h-fit'>
            <h3 className='text-right text-sm opacity-50'>Today, 30th April 2023</h3>
            <div className='mt-5 flex flex-col items-center'>
                <h2 className='font-bold text-2xl'>VAS & Self Service Successful</h2>
                <div className='bg-[#66666624] h-24 w-24 p-6 rounded-full mt-5'>
                    <img src='https://i.ibb.co/k29dSbv/Vector.png' alt='qr-code' />
                </div>

            </div>
            <h4 className='font-bold text-sm mt-4'>Order Number: 1234567890qwertyuiopasdfghjklzxcvbnm</h4>
            <div>
                <h4 className='font-bold text-sm mt-4'>Payment Status</h4>
                <h5 className='opacity-50 text-sm my-1'>Payment Successful</h5>
                <h5 className='opacity-50 text-sm my-1'>Paid Via Card</h5>
                <h5 className='opacity-50 text-sm my-1'>10:23am, 30th April 2023</h5>
            </div>
            <div className='flex justify-between mt-4'>
                <div className='mt-3 flex gap-2 text-[#1974CD]'>
                    <h3>Contact the user</h3>
                    <img className='h-3 w-4 mt-2' src='https://i.ibb.co/gW6gxSk/Vector.png' alt='email' />
                    <img className='h-4 w-4 mt-2' src='https://i.ibb.co/9GNGCVH/ph-phone-call-fill.png' alt='phone' />
                </div>
                <button className='bg-[#1974CD] rounded-md py-3 px-8 text-white'>
                    Resolve
                </button>
            </div>
        </div>
    </>
  )
}

export default PendingOrder