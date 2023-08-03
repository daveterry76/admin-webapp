import { useState } from "react"
import Cards from "../home-components/cards"
import Chart from "../home-components/chart"
import CountUpFn from "../home-components/countup"
import Notifications from "../home-components/notifications"
import Profile from "../home-components/profile"
import Searchbar from "../home-components/searchbar"
import AllVas from "./all vas"
import AllOrders from "./all vas"
import PendingOrder from "./pending-order"


const VasSelfService = () => {
  const [toggleState, setToggleState] = useState(0);

  const handleToggleState = (index) => {
    setToggleState(index);
  };



  return (
    <>
        <div>
          <div className='flex gap-3'>
            <Searchbar />
            <Profile />
          </div>
          <div className='mt-2 rounded-xl bg-[#1974CD] flex justify-between w-full h-fit py-4 px-8'>
            <div>
              <svg className='mr-4 mt-1 mb-4 h-8 w-5' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 6.25H16.5L18 19H0L1.5 6.25ZM4.5 11.5H6V8.5H4.5V11.5ZM12 11.5H13.5V8.5H12V11.5ZM6 4.75H4.5C4.5 3.55653 4.97411 2.41193 5.81802 1.56802C6.66193 0.724106 7.80653 0.25 9 0.25C10.1935 0.25 11.3381 0.724106 12.182 1.56802C13.0259 2.41193 13.5 3.55653 13.5 4.75H12C12 3.95435 11.6839 3.19129 11.1213 2.62868C10.5587 2.06607 9.79565 1.75 9 1.75C8.20435 1.75 7.44129 2.06607 6.87868 2.62868C6.31607 3.19129 6 3.95435 6 4.75Z" 
                fill="#FFFFFF" fill-opacity="1"/>
              </svg>
              <div className='text-white text-2xl font-extrabold mb-8'>
                Vas & Self Services
              </div>
              <div className='flex justify-center'>
                  <div className="bg-white rounded-md flex gap-1 w-fit p-1">
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 0 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(0)}>All Booked Adverts</button>
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 1 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(1)}>Successful Adverts</button>
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 2 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(2)}>Pending Adverts</button>
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 3 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(3)}>Cancelled Adverts</button>
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
              <AllVas />
            </div>
            <div className='w-[35%]'>
              <PendingOrder />
            </div>
          </div>
        </div>
    </>
  )
}

export default VasSelfService