import { useState } from "react"
import Cards from "../home-components/cards"
import Chart from "../home-components/chart"
import CountUpFn from "../home-components/countup"
import Notifications from "../home-components/notifications"
import Profile from "../home-components/profile"
import Searchbar from "../home-components/searchbar"
import AllPayments from "./payment"
import AllOrders from "./payment"
import PendingOrder from "./pending-order"


const Payments = () => {

  const [toggleState, setToggleState] = useState(1);

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
              <svg className='mr-4 mt-1 mb-4 h-8 w-5' width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.125 0.5C2.2962 0.5 1.50134 0.82924 0.915291 1.41529C0.32924 2.00134 0 2.7962 0 3.625V5.25H20V3.625C20 2.7962 19.6708 2.00134 19.0847 1.41529C18.4987 0.82924 17.7038 0.5 16.875 0.5H3.125ZM0 12.375V6.5H20V12.375C20 13.2038 19.6708 13.9987 19.0847 14.5847C18.4987 15.1708 17.7038 15.5 16.875 15.5H3.125C2.2962 15.5 1.50134 15.1708 0.915291 14.5847C0.32924 13.9987 0 13.2038 0 12.375ZM13.625 10.75C13.4592 10.75 13.3003 10.8158 13.1831 10.9331C13.0658 11.0503 13 11.2092 13 11.375C13 11.5408 13.0658 11.6997 13.1831 11.8169C13.3003 11.9342 13.4592 12 13.625 12H16.375C16.5408 12 16.6997 11.9342 16.8169 11.8169C16.9342 11.6997 17 11.5408 17 11.375C17 11.2092 16.9342 11.0503 16.8169 10.9331C16.6997 10.8158 16.5408 10.75 16.375 10.75H13.625Z" 
                fill="#FFFFFF" fill-opacity="1"/>
              </svg>
              <div className='text-white text-2xl font-extrabold mb-8'>
                Payments
              </div>
              <div className='flex justify-center'>
                  <div className="bg-white rounded-md flex gap-1 w-fit p-1">
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 0 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(0)}>All Payments</button>
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 1 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(1)}>Successful Payments</button>
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 2 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(2)}>Pending Payments</button>
                    <button className={"rounded-md px-8 py-1 " + (toggleState === 3 ? 'bg-[#1974CD] text-white' : 'bg-[#FFF] text-black')} onClick={() => handleToggleState(3)}>Cancelled Payments</button>
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
              <AllPayments />
            </div>
            <div className='w-[35%]'>
              <PendingOrder />
            </div>
          </div>
        </div>
    </>
  )
}

export default Payments