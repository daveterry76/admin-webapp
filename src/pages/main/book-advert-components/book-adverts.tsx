import { useState } from "react"
import Cards from "../home-components/cards"
import Chart from "../home-components/chart"
import CountUpFn from "../home-components/countup"
import Notifications from "../home-components/notifications"
import Profile from "../home-components/profile"
import Searchbar from "../home-components/searchbar"
import BookedAdvert from "./book-advert"
import AllOrders from "./book-advert"
import PendingOrder from "./pending-order"


const BookAdverts = () => {

  const [toggleState, setToggleState] = useState(1);


  return (
    <>
        <div>
          <div className='flex gap-3'>
            <Searchbar />
            <Profile />
          </div>
          <div className='mt-2 rounded-xl bg-[#1974CD] flex justify-between w-full h-fit py-4 px-8'>
            <div>
              <svg className='mr-4 mt-1 mb-4 h-8 w-5' width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29872e-09 1C5.29872e-09 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H12C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V6H17C17.6566 6 18.3068 6.12933 18.9134 6.3806C19.52 6.63188 20.0712 7.00017 20.5355 7.46447C20.9998 7.92876 21.3681 8.47996 21.6194 9.08658C21.8707 9.69321 22 10.3434 22 11V15C22.0001 15.6437 21.7932 16.2705 21.4098 16.7876C21.0265 17.3048 20.487 17.6849 19.871 17.872C19.6876 18.477 19.3178 19.0086 18.8143 19.3909C18.3108 19.7732 17.6994 19.9867 17.0674 20.0009C16.4353 20.0151 15.815 19.8293 15.2948 19.4699C14.7747 19.1106 14.3814 18.5962 14.171 18H7.83C7.61962 18.5962 7.22629 19.1106 6.70616 19.4699C6.18602 19.8293 5.56566 20.0151 4.93363 20.0009C4.3016 19.9867 3.69021 19.7732 3.18673 19.3909C2.68324 19.0086 2.3134 18.477 2.13 17.872C1.51384 17.6851 0.97412 17.305 0.590566 16.7879C0.207012 16.2707 -3.82447e-05 15.6439 5.29872e-09 15V11H6C6.26522 11 6.51957 10.8946 6.70711 10.7071C6.89464 10.5196 7 10.2652 7 10C7 9.73478 6.89464 9.48043 6.70711 9.29289C6.51957 9.10536 6.26522 9 6 9H5.29872e-09V7H4C4.26522 7 4.51957 6.89464 4.70711 6.70711C4.89464 6.51957 5 6.26522 5 6C5 5.73478 4.89464 5.48043 4.70711 5.29289C4.51957 5.10536 4.26522 5 4 5H5.29872e-09V1ZM13 16H14.171C14.3687 15.4404 14.7279 14.9521 15.2032 14.5967C15.6785 14.2414 16.2485 14.0349 16.8411 14.0036C17.4337 13.9722 18.0223 14.1173 18.5325 14.4205C19.0426 14.7237 19.4513 15.1714 19.707 15.707C19.8 15.6143 19.8738 15.5041 19.924 15.3827C19.9743 15.2614 20.0001 15.1313 20 15V11C20 10.2044 19.6839 9.44129 19.1213 8.87868C18.5587 8.31607 17.7956 8 17 8H13V16ZM6 17C6 16.7348 5.89464 16.4804 5.70711 16.2929C5.51957 16.1054 5.26522 16 5 16C4.73478 16 4.48043 16.1054 4.29289 16.2929C4.10536 16.4804 4 16.7348 4 17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18C5.26522 18 5.51957 17.8946 5.70711 17.7071C5.89464 17.5196 6 17.2652 6 17ZM16.293 16.293C16.1999 16.3856 16.126 16.4958 16.0757 16.6172C16.0254 16.7385 15.9997 16.8686 16 17C16 17.2314 16.0801 17.4556 16.2269 17.6344C16.3736 17.8133 16.5778 17.9358 16.8047 17.981C17.0316 18.0261 17.2672 17.9912 17.4712 17.8822C17.6753 17.7732 17.8352 17.5968 17.9238 17.3831C18.0124 17.1693 18.0241 16.9315 17.957 16.7101C17.8899 16.4887 17.7481 16.2974 17.5557 16.1688C17.3634 16.0403 17.1324 15.9824 16.9021 16.005C16.6719 16.0277 16.4566 16.1294 16.293 16.293Z" 
                  fill="#FFFFFF" fill-opacity="1"/>
              </svg>
              <div className='text-white text-2xl font-extrabold mb-8'>
                Book Adverts
              </div>
              <div className='flex justify-center'>
                  <div className="bg-white rounded-md flex gap-1 w-fit p-1">
                    <button className="bg-[#1974CD] rounded-md px-8 py-1 text-white">All Booked Adverts</button>
                    <button className="rounded-md px-8 py-1 text-black">Successful Adverts</button>
                    <button className="rounded-md px-8 py-1 text-black">Pending Adverts</button>
                    <button className="rounded-md px-8 py-1 text-black">Cancelled Adverts</button>
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
              <BookedAdvert />
            </div>
            <div className='w-[35%]'>
              <PendingOrder />
            </div>
          </div>
        </div>
    </>
  )
}

export default BookAdverts