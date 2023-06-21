import React from 'react'
import { useState } from 'react'
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


const Notifications = () => {
  const [notifications, setNotifications] = useState([{
    icon: 'src/pages/main/home-components/notif-icon.png',
    title: 'Lorem ipsum',
    number: 2345,
    date: 'Today, 29th April 2023'
  }])

  const addNotifications = () => {
    setNotifications([
      ...notifications, 
      { icon:'src/pages/main/home-components/notif-icon.png', title: 'Lorem ipsum', number: 2345, date: 'Today, 29th April 2023' }
    ])
  }

  return (
    <>
      <div className='bg-white rounded-md w-full px-2 py-6 mt-4 mb-6'>
        <div className='flex justify-between mb-4'>
          <h4 className='font-bold'>Recent Notifications</h4>
          <svg data-tooltip-id='add-btn' data-tooltip-content="Click here to add" onClick={addNotifications} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        { notifications.map((notification) => (
          <>
            <div className='flex justify-between my-5'>
              <div className='flex gap-2'>
                <img className='h-fit w-fit mt-1 bg-[#1974CD24] p-2 rounded-full' src={notification.icon} alt='notif icon' />
                <div>
                  <h1 className='text-md font-bold mb-1'>{notification.title}</h1>
                  <p className='text-[12px] opacity-50'>{notification.date}</p>
                </div>
              </div>
              <h3 className='text-green-400 font-bold text-sm bg-[#34B53A24] px-2 h-fit w-fit rounded-xl '>+{notification.number}</h3>
            </div>
          </>  
          )) }
      </div>

      <ReactTooltip 
        id='add-btn'
        place='top'
        variant='info'
      />
    </>
  )
}

export default Notifications;