import React from 'react'
import orders from './orders.json'

const AllOrders = () => {
  return (
    <>
        <div className="bg-white rounded-md px-2 pb-3 pt-6 mt-4 mb-6">
            {/* All Orders */}

            <div className="px-6 flex justify-between">
                <div className="flex gap-1">
                    <h3 className="text-xl font-bold">All Orders - 12,546</h3>
                </div>
                <div className="flex gap-3">
                    <div className="rounded-md border cursor-pointer flex px-4 gap-3 w-fit">
                        <p>March 2020</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='px-6 mt-6'>
                {orders.map((order) => (
                    <div className='my-5 flex justify-between'>
                        <div className='flex'>
                            <svg className='mr-4 mt-1 mb-4 h-8 w-8 p-2 bg-[#1974CD24] rounded-full' viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_253" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="22">
                                <path d="M15.5 3H2.5C1.94772 3 1.5 3.44772 1.5 4V20C1.5 20.5523 1.94772 21 2.5 21H15.5C16.0523 21 16.5 20.5523 16.5 20V4C16.5 3.44772 16.0523 3 15.5 3Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M6 1V4M12 1V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 8.5H13M5 12.5H11M5 16.5H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </mask>
                                <g mask="url(#mask0_1_253)">
                                <path d="M-3 -1H21V23H-3V-1Z" fill="#1974CD" fill-opacity="1"/>
                                </g>
                            </svg>
                            <div>
                                <h2 className='font-extrabold text-[15px]'>{order.orderNumber}</h2>
                                <h5 className='opacity-50 text-sm'>{order.brandName}</h5>
                            </div>
                        </div>
                        <div>
                            <h4 className='opacity-50 text-sm'>{order.date}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default AllOrders