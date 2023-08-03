import { useState } from "react"
import Cards from "../home-components/cards"
import Chart from "../home-components/chart"
import CountUpFn from "../home-components/countup"
import Notifications from "../home-components/notifications"
import Profile from "../home-components/profile"
import Searchbar from "../home-components/searchbar"
import AllSettings from "./setting"
import AllOrders from "./setting"
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
              <h1 className="text-white">This page is not available for now</h1>
            </div>
            
          </div>
          <div className='flex gap-3'>
            <div className='w-[65%]'>
              <AllSettings />
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