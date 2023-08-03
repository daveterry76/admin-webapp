import { useState } from "react"
import Cards from "../home-components/cards"
import Chart from "../home-components/chart"
import CountUpFn from "../home-components/countup"
import Notifications from "../home-components/notifications"
import Profile from "../home-components/profile"
import Searchbar from "../home-components/searchbar"
import AllOrders from "./all-orders"
import PendingOrder from "./pending-order"
// import { useLocation } from 'react-router-dom';

const Home = () => {
  // const location = useLocation();
  // const { profile } = location.state || {};
  const [toggleState, setToggleState] = useState(0);

  const handleToggleState = (index) => {
    setToggleState(index);
  };

  return (
    <>
        <div>
          <div className='flex gap-3'>
            <Searchbar />
            <Profile  />
          </div>
          <div className='mt-2 rounded-xl bg-[#1974CD] flex justify-between w-full h-fit py-4 px-8'>
            <div>
              <svg className='mr-4 mt-1 mb-4 h-8 w-5' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_1_253" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="22">
                          <path d="M15.5 3H2.5C1.94772 3 1.5 3.44772 1.5 4V20C1.5 20.5523 1.94772 21 2.5 21H15.5C16.0523 21 16.5 20.5523 16.5 20V4C16.5 3.44772 16.0523 3 15.5 3Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                          <path d="M6 1V4M12 1V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M5 8.5H13M5 12.5H11M5 16.5H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </mask>
                          <g mask="url(#mask0_1_253)">
                          <path d="M-3 -1H21V23H-3V-1Z" fill="#FFFFFF" fill-opacity="1"/>
                          </g>
              </svg>
              <div className='text-white text-2xl font-extrabold mb-8'>
                Brand Adverts
              </div>
              <div className='flex justify-center'>
                  <div className="bg-white rounded-md flex gap-1 w-fit p-1">
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 0 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(0)}>All Orders</button>
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 1 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(1)}>Successful Orders</button>
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 2 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(2)}>Pending Orders</button>
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 3 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(3)}>Cancelled Orders</button>
                  </div>
              </div>
            </div>
            <div>
              <svg className="h-24 w-20" width="140" height="48" viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 30.8095C7.74501 30.8572 8.38743 36.3595 12.4879 37.9195C16.5883 39.4796 18.3002 19.3302 22.9778 18.6613C27.6554 17.9924 29.3045 44.4387 33.4677 43.0596C37.6309 41.6806 37.9433 29.7403 43.4331 27.7954C48.9229 25.8504 48.4545 45.4452 53.3985 45.995C58.3426 46.5447 58.2598 2 63.3639 2C68.468 2 68.984 32.277 74.3783 31.77C79.7726 31.263 79.8799 14.4053 85.6713 14.4053C91.4628 14.4053 93.283 29.3748 98.3748 30.7619C103.467 32.149 102.188 47.9617 107.421 43.0596C112.655 38.1576 111.964 19.5138 116.862 18.6613C121.761 17.8088 123.38 29.7475 127.602 31.77C131.824 33.7925 133.846 43.119 138 43.119" stroke="white" stroke-width="3" stroke-linecap="round"/>
              </svg>
              <CountUpFn />
            </div>
          </div>
          <div className='flex gap-3'>
            <div className='w-[65%]'>
              <AllOrders />
            </div>
            <div className='w-[35%]'>
              <PendingOrder />
            </div>
          </div>
        </div>
    </>
  )
}

export default Home