import Searchbar from './home-components/searchbar'
import Date from './home-components/date'
import CountUpFn from './home-components/countup'
import Cards from './home-components/cards'
import Chart from './home-components/chart'
import Notifications from './home-components/notifications'
import { useState, useEffect } from 'react'
import Profile from './home-components/profile';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const { profile } = location.state || {};
  return (
    <>
        <div>
          <div className='flex gap-3'>
            <Searchbar />
            <Date />
            <Profile profile={profile}/>
          </div>
          <div className='mt-2 rounded-xl bg-[#1974CD] flex justify-between w-full h-fit py-4 px-8'>
            <div>
              <div className='text-white text-2xl font-extrabold mb-8'>
                Users
              </div>
              <div className='w-fit flex gap-3'>
                <button className='px-8 py-2 bg-white text-[#1974CD] hover:text-white hover:bg-[#1974CD] hover:border-white hover:transition border border-[#1974CD] rounded-md'>
                  New Users
                </button>
                <button className='px-8 py-2 bg-[#1974CD] text-white hover:text-[#1974CD] hover:bg-white hover:border-[#1974CD] hover:transition border border-white rounded-md'>
                  View Users
                </button>
              </div>
            </div>
            <CountUpFn />
          </div>
          <Cards />
          <div className='flex gap-3'>
            <div className='w-3/4'>
              <Chart />
            </div>
            <div className='w-1/4'>
              <Notifications />
            </div>
          </div>
        </div>
    </>
  )
}

export default Home