import CountUp from "react-countup";
import image from './cards.json';

const Cards = () => {

    let bookAdvPrev = 3.57,
    bookAdvCurrent = 9.63,
    paymentPrev = 10.10,
    paymentCurrent = 2.45,
    brandAdvPrev = 7.25,
    brandAdvCurrent = 20,
    vasPrev = 25,
    vasCurrent = 18.5;

    let bookAdvPercentageInc = ((bookAdvPrev - bookAdvCurrent)/bookAdvPrev),
    paymentPercentageInc = ((paymentPrev - paymentCurrent)/paymentPrev),
    brandAdvPercentageInc = ((brandAdvPrev - brandAdvCurrent)/brandAdvPrev),
    vasPercentageInc = ((vasPrev - vasCurrent)/vasPrev);

    const percentageIncrease = () => {
        return bookAdvPercentageInc;
    }

    console.log(bookAdvPercentageInc);

  return (
    <>
        <div className='flex gap-3 mt-2'>

            {/* Book Advert */}

            <div className='bg-white cursor-pointer rounded-lg px-4 py-2 w-1/4'>
                <div className="flex justify-between">
                    <div>
                        <div className='rounded-full h-fit w-fit bg-[#1974CD24] mb-3 p-4'>
                            <img className='w-4 h-4' src='https://i.ibb.co/KV5hGrg/book-advert.png' alt='book advert' />
                        </div>
                        <h3 className="font-bold text-md">Book an advert</h3>
                    </div>
                    <div>
                        <CountUp start={0} end={12546} delay={0} className='text-black text-xl font-bold mt-2' />
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <img src={bookAdvPrev <= bookAdvCurrent ? `${image[0].redChange}` : `${image[0].greenChange}`} className='h-8 w-16' />
                    {bookAdvPercentageInc < 0 ? <p className="pt-2 text-sm text-red-500 bg-red-200 px-3 rounded-2xl"> {bookAdvPercentageInc.toFixed(2)} %</p> : <p className="pt-2 text-sm text-green-500 bg-green-200 px-3 rounded-2xl"> {bookAdvPercentageInc.toFixed(2)} %</p>}
                </div>
            </div>

            {/* Payments */}
            <div className='bg-white cursor-pointer rounded-lg px-4 py-2 w-1/4'>
                <div className="flex justify-between">
                    <div>
                        <div className='rounded-full h-fit w-fit bg-[#1974CD24] mb-3 p-4'>
                            <img className='w-4 h-4' src='https://i.ibb.co/dJpWCm5/payments.png' alt='payments' />
                        </div>
                        <h3 className="font-bold text-md">Payments</h3>
                    </div>
                    <div>
                        <CountUp start={0} end={12546} delay={0} className='text-black text-xl font-bold mt-2' />
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <img src={paymentPrev <= paymentCurrent ? `${image[0].redChange}` : `${image[0].greenChange}`} className='h-8 w-16' />
                    {paymentPercentageInc < 0 ? <p className="pt-2 text-sm text-red-500 bg-red-200 px-3 rounded-2xl"> {paymentPercentageInc.toFixed(2)} %</p> : <p className="pt-2 text-sm text-green-500 bg-green-200 px-3 rounded-2xl"> {paymentPercentageInc.toFixed(2)} %</p>}
                </div>
            </div>

            {/* Brand Adverts */}
            <div className='bg-white cursor-pointer rounded-lg px-4 py-2 w-1/4'>
                <div className="flex justify-between">
                    <div>
                        <div className='rounded-full h-fit w-fit bg-[#1974CD24] mb-3 p-4'>
                            <img className='w-4 h-4' src='https://i.ibb.co/jvcxx2Q/brand-advert.png' alt='brand adverts' />
                        </div>
                        <h3 className="font-bold text-md">Brand advert</h3>
                    </div>
                    <div>
                        <CountUp start={0} end={12546} delay={0} className='text-black text-xl font-bold mt-2' />
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <img src={brandAdvPrev <= brandAdvCurrent ? `${image[0].redChange}` : `${image[0].greenChange}`} className='h-8 w-16' />
                    {brandAdvPercentageInc < 0 ? <p className="pt-2 text-sm text-red-500 bg-red-200 px-3 rounded-2xl"> {brandAdvPercentageInc.toFixed(2)} %</p> : <p className="pt-2 text-sm text-green-500 bg-green-200 px-3 rounded-2xl"> {brandAdvPercentageInc.toFixed(2)} %</p>}
                </div>
            </div>

            {/* Vas and Self-Service */}
            <div className='bg-white cursor-pointer rounded-lg px-4 py-2 w-1/4'>
                <div className="flex justify-between">
                        <div>
                            <div className='rounded-full h-fit w-fit bg-[#1974CD24] mb-3 p-4'>
                                <svg className='h-4 w-4' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_1_253" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="22">
                                    <path d="M15.5 3H2.5C1.94772 3 1.5 3.44772 1.5 4V20C1.5 20.5523 1.94772 21 2.5 21H15.5C16.0523 21 16.5 20.5523 16.5 20V4C16.5 3.44772 16.0523 3 15.5 3Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="M6 1V4M12 1V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 8.5H13M5 12.5H11M5 16.5H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </mask>
                                    <g mask="url(#mask0_1_253)">
                                    <path d="M-3 -1H21V23H-3V-1Z" fill="#1974CD" fill-opacity="1"/>
                                    </g>
                                </svg>
                            </div>
                            <h3 className="font-bold text-md">VAS & Self Service</h3>
                        </div>
                        <div>
                            <CountUp start={0} end={12546} delay={0} className='text-black text-xl font-bold mt-2' />
                        </div>
                </div>
                <div className="flex justify-between mt-4">
                    <img src={vasPrev <= vasCurrent ? `${image[0].redChange}` : `${image[0].greenChange}`} className='h-8 w-16' />
                    {vasPercentageInc < 0 ? <p className="pt-2 text-sm text-red-500 bg-red-200 px-3 rounded-2xl"> {vasPercentageInc.toFixed(2)} %</p> : <p className="pt-2 text-sm text-green-500 bg-green-200 px-3 rounded-2xl"> {vasPercentageInc.toFixed(2)} %</p>}
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards