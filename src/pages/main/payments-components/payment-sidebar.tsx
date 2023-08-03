import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <div className='bg-white flex flex-col gap-4 overflow-hidden h-full w-full pl-16 pt-20 pr-10 border'>
            <h1 className='font-extrabold'>Overview</h1>

            <Link to="/home">
              <div className='flex cursor-pointer'>
                  <svg className='h-4 w-4 mr-4 mt-1' width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2281 0.687989C10.877 0.41488 10.4449 0.266602 10.0001 0.266602C9.5553 0.266602 9.12319 0.41488 8.7721 0.687989L0.388104 7.20799C-0.363896 7.79499 0.0501037 8.99999 1.0031 8.99999H2.0001V17C2.0001 17.5304 2.21082 18.0391 2.58589 18.4142C2.96096 18.7893 3.46967 19 4.0001 19H8.0001V13C8.0001 12.4696 8.21082 11.9608 8.58589 11.5858C8.96096 11.2107 9.46967 11 10.0001 11C10.5305 11 11.0392 11.2107 11.4143 11.5858C11.7894 11.9608 12.0001 12.4696 12.0001 13V19H16.0001C16.5305 19 17.0392 18.7893 17.4143 18.4142C17.7894 18.0391 18.0001 17.5304 18.0001 17V8.99999H18.9971C19.9491 8.99999 20.3651 7.79499 19.6121 7.20899L11.2281 0.687989Z" 
                      fill="#00000080"/>
                  </svg>
                  <h3>Home</h3>
              </div>
            </Link>
            
            <Link to="/brand-advert">
              <div className='flex cursor-pointer'>
                <svg className='mr-4 mt-1 h-4 w-4' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_1_253" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="22">
                  <path d="M15.5 3H2.5C1.94772 3 1.5 3.44772 1.5 4V20C1.5 20.5523 1.94772 21 2.5 21H15.5C16.0523 21 16.5 20.5523 16.5 20V4C16.5 3.44772 16.0523 3 15.5 3Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                  <path d="M6 1V4M12 1V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5 8.5H13M5 12.5H11M5 16.5H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </mask>
                  <g mask="url(#mask0_1_253)">
                  <path d="M-3 -1H21V23H-3V-1Z" fill="#00000080" fill-opacity="1"/>
                  </g>
                </svg>
                <h3>Brand Adverts</h3>                
              </div>
            </Link>
            
            <Link to='/booked-adverts'>
              <div className='flex cursor-pointer'>
                  <svg className='w-4 h-4 mr-4 mt-1' width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29872e-09 1C5.29872e-09 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H12C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V6H17C17.6566 6 18.3068 6.12933 18.9134 6.3806C19.52 6.63188 20.0712 7.00017 20.5355 7.46447C20.9998 7.92876 21.3681 8.47996 21.6194 9.08658C21.8707 9.69321 22 10.3434 22 11V15C22.0001 15.6437 21.7932 16.2705 21.4098 16.7876C21.0265 17.3048 20.487 17.6849 19.871 17.872C19.6876 18.477 19.3178 19.0086 18.8143 19.3909C18.3108 19.7732 17.6994 19.9867 17.0674 20.0009C16.4353 20.0151 15.815 19.8293 15.2948 19.4699C14.7747 19.1106 14.3814 18.5962 14.171 18H7.83C7.61962 18.5962 7.22629 19.1106 6.70616 19.4699C6.18602 19.8293 5.56566 20.0151 4.93363 20.0009C4.3016 19.9867 3.69021 19.7732 3.18673 19.3909C2.68324 19.0086 2.3134 18.477 2.13 17.872C1.51384 17.6851 0.97412 17.305 0.590566 16.7879C0.207012 16.2707 -3.82447e-05 15.6439 5.29872e-09 15V11H6C6.26522 11 6.51957 10.8946 6.70711 10.7071C6.89464 10.5196 7 10.2652 7 10C7 9.73478 6.89464 9.48043 6.70711 9.29289C6.51957 9.10536 6.26522 9 6 9H5.29872e-09V7H4C4.26522 7 4.51957 6.89464 4.70711 6.70711C4.89464 6.51957 5 6.26522 5 6C5 5.73478 4.89464 5.48043 4.70711 5.29289C4.51957 5.10536 4.26522 5 4 5H5.29872e-09V1ZM13 16H14.171C14.3687 15.4404 14.7279 14.9521 15.2032 14.5967C15.6785 14.2414 16.2485 14.0349 16.8411 14.0036C17.4337 13.9722 18.0223 14.1173 18.5325 14.4205C19.0426 14.7237 19.4513 15.1714 19.707 15.707C19.8 15.6143 19.8738 15.5041 19.924 15.3827C19.9743 15.2614 20.0001 15.1313 20 15V11C20 10.2044 19.6839 9.44129 19.1213 8.87868C18.5587 8.31607 17.7956 8 17 8H13V16ZM6 17C6 16.7348 5.89464 16.4804 5.70711 16.2929C5.51957 16.1054 5.26522 16 5 16C4.73478 16 4.48043 16.1054 4.29289 16.2929C4.10536 16.4804 4 16.7348 4 17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18C5.26522 18 5.51957 17.8946 5.70711 17.7071C5.89464 17.5196 6 17.2652 6 17ZM16.293 16.293C16.1999 16.3856 16.126 16.4958 16.0757 16.6172C16.0254 16.7385 15.9997 16.8686 16 17C16 17.2314 16.0801 17.4556 16.2269 17.6344C16.3736 17.8133 16.5778 17.9358 16.8047 17.981C17.0316 18.0261 17.2672 17.9912 17.4712 17.8822C17.6753 17.7732 17.8352 17.5968 17.9238 17.3831C18.0124 17.1693 18.0241 16.9315 17.957 16.7101C17.8899 16.4887 17.7481 16.2974 17.5557 16.1688C17.3634 16.0403 17.1324 15.9824 16.9021 16.005C16.6719 16.0277 16.4566 16.1294 16.293 16.293Z" 
                      fill="#00000080" fill-opacity="1"/>
                  </svg>
                  <h3>Book an Advert</h3>
              </div>
            </Link>

            <Link to='/payments'>
              <div className='flex cursor-pointer bg-[#1974CD2B] px-2 py-2 rounded-xl'>
                  <svg className='w-4 h-4 mr-4 mt-1' width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.125 0.5C2.2962 0.5 1.50134 0.82924 0.915291 1.41529C0.32924 2.00134 0 2.7962 0 3.625V5.25H20V3.625C20 2.7962 19.6708 2.00134 19.0847 1.41529C18.4987 0.82924 17.7038 0.5 16.875 0.5H3.125ZM0 12.375V6.5H20V12.375C20 13.2038 19.6708 13.9987 19.0847 14.5847C18.4987 15.1708 17.7038 15.5 16.875 15.5H3.125C2.2962 15.5 1.50134 15.1708 0.915291 14.5847C0.32924 13.9987 0 13.2038 0 12.375ZM13.625 10.75C13.4592 10.75 13.3003 10.8158 13.1831 10.9331C13.0658 11.0503 13 11.2092 13 11.375C13 11.5408 13.0658 11.6997 13.1831 11.8169C13.3003 11.9342 13.4592 12 13.625 12H16.375C16.5408 12 16.6997 11.9342 16.8169 11.8169C16.9342 11.6997 17 11.5408 17 11.375C17 11.2092 16.9342 11.0503 16.8169 10.9331C16.6997 10.8158 16.5408 10.75 16.375 10.75H13.625Z" 
                      fill="#1974CD" fill-opacity="1"/>
                  </svg>
                  <h3>Payments</h3>
              </div>
            </Link>

            <Link to='/vas-self-service'>
              <div className='flex cursor-pointer'>
                  <svg className='w-4 h-4 mr-4 mt-1' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 6.25H16.5L18 19H0L1.5 6.25ZM4.5 11.5H6V8.5H4.5V11.5ZM12 11.5H13.5V8.5H12V11.5ZM6 4.75H4.5C4.5 3.55653 4.97411 2.41193 5.81802 1.56802C6.66193 0.724106 7.80653 0.25 9 0.25C10.1935 0.25 11.3381 0.724106 12.182 1.56802C13.0259 2.41193 13.5 3.55653 13.5 4.75H12C12 3.95435 11.6839 3.19129 11.1213 2.62868C10.5587 2.06607 9.79565 1.75 9 1.75C8.20435 1.75 7.44129 2.06607 6.87868 2.62868C6.31607 3.19129 6 3.95435 6 4.75Z" fill="#121212" fill-opacity="0.5"/>
                  </svg>
                  <h3>VAS & Self Service</h3>
              </div>
            </Link> 

            <Link to='/settings'>
                <div className='flex cursor-pointer'>
                    <svg className='w-4 h-4 mr-4 mt-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2936 2.19017e-06C13.6464 2.19017e-06 13.962 0.219602 14.0808 0.548402L14.928 2.8968C15.2316 2.9724 15.492 3.048 15.7128 3.1272C15.954 3.2136 16.2648 3.3444 16.6488 3.5232L18.6216 2.4792C18.7826 2.39389 18.9669 2.3631 19.1469 2.39144C19.327 2.41978 19.4929 2.50574 19.62 2.6364L21.3552 4.4304C21.5856 4.6692 21.6504 5.0184 21.5208 5.3232L20.5956 7.4916C20.7492 7.7736 20.8716 8.0148 20.9652 8.2164C21.066 8.436 21.1908 8.7384 21.3396 9.1284L23.496 10.0524C23.82 10.1904 24.0204 10.5144 23.9988 10.8612L23.8404 13.3512C23.8295 13.513 23.7714 13.668 23.6733 13.7971C23.5752 13.9261 23.4413 14.0235 23.2884 14.0772L21.246 14.8032C21.1872 15.0852 21.126 15.3264 21.0612 15.5304C20.9566 15.8455 20.8373 16.1554 20.7036 16.4592L21.7296 18.7272C21.802 18.8866 21.8215 19.0649 21.7852 19.2361C21.7489 19.4074 21.6588 19.5625 21.528 19.6788L19.5768 21.4212C19.4483 21.5355 19.2879 21.6077 19.1172 21.6283C18.9465 21.6489 18.7735 21.6168 18.6216 21.5364L16.6104 20.4708C16.2957 20.6374 15.9711 20.7845 15.6384 20.9112L14.76 21.24L13.98 23.4C13.9222 23.5582 13.8179 23.6952 13.6808 23.7931C13.5438 23.8909 13.3803 23.9451 13.212 23.9484L10.932 24C10.7591 24.0045 10.5891 23.9554 10.4453 23.8593C10.3016 23.7633 10.1911 23.625 10.1292 23.4636L9.20995 21.0312C8.89633 20.924 8.5858 20.808 8.27875 20.6832C8.02761 20.5745 7.78027 20.4572 7.53715 20.3316L5.25715 21.306C5.10692 21.3701 4.9413 21.3891 4.78044 21.3608C4.61959 21.3325 4.47044 21.258 4.35115 21.1464L2.66395 19.5636C2.53834 19.4463 2.45279 19.2924 2.41941 19.1238C2.38603 18.9552 2.40651 18.7803 2.47795 18.624L3.45835 16.488C3.32797 16.235 3.20708 15.9772 3.09595 15.7152C2.96623 15.3945 2.84618 15.0699 2.73595 14.742L0.587953 14.088C0.413354 14.0352 0.261066 13.9263 0.15474 13.7781C0.0484149 13.6299 -0.00599784 13.4507 -4.73183e-05 13.2684L0.0839527 10.9632C0.0899318 10.8128 0.136917 10.6669 0.219826 10.5413C0.302736 10.4156 0.418415 10.315 0.554353 10.2504L2.80795 9.168C2.91235 8.7852 3.00355 8.4876 3.08395 8.2704C3.19716 7.9803 3.32288 7.69523 3.46075 7.416L2.48395 5.352C2.40982 5.19526 2.38731 5.01905 2.41966 4.84871C2.452 4.67836 2.53753 4.52267 2.66395 4.404L4.34875 2.8128C4.46686 2.70141 4.61464 2.62652 4.77431 2.59714C4.93398 2.56776 5.09873 2.58514 5.24875 2.6472L7.52635 3.588C7.77835 3.42 8.00635 3.2844 8.21275 3.1752C8.45875 3.0444 8.78755 2.9076 9.20155 2.76L9.99355 0.550802C10.0521 0.389124 10.1591 0.24946 10.3 0.15088C10.4409 0.0522992 10.6088 -0.000391501 10.7808 2.19017e-06H13.2936ZM12.0288 8.4228C10.0284 8.4228 8.40715 10.0248 8.40715 12.0024C8.40715 13.98 10.0284 15.5832 12.0288 15.5832C14.028 15.5832 15.6492 13.98 15.6492 12.0024C15.6492 10.0248 14.0292 8.4228 12.0288 8.4228Z" fill="#121212" fill-opacity="0.5"/>
                    </svg>
                    <h3>Settings</h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Sidebar