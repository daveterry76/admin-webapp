import { useState } from "react"
import { Link } from "react-router-dom";


const Otp = () => {
    const [otp, setOtp] = useState('')
  


  return (
    <>
    <div className="bg-[#919191] h-screen w-screen flex justify-center items-center font-lato">
      <div className="bg-white h-[36rem] w-[75rem]">
        <div className="flex justify-center items-center p-6">  
          <div className="w-1/2 bg-blue-100 rounded-md flex justify-center">
            <img className="h-[32rem] w-[36rem]" src="https://i.ibb.co/1zNvBqR/otp.png" alt="verify-otp" />
          </div>  
          <div className="w-1/2 px-24 self-start pt-16">
            <div className="mb-9">
              <h1 className="font-bold text-2xl my-2">Verify Email</h1>
              <p className="text-sm">Please check your mail for a One time password -<span className="font-extrabold cursor-pointer">OTP</span></p>
            </div>
            <div>
              <form className="relative">
                <label>OTP - One time Password</label><br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-50 absolute top-[52px] left-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <input 
                  value={otp} 
                  onChange={(e) => setOtp(e.target.value)} 
                  className="h-12 w-full rounded-md mt-3 mb-6 border pl-12 py-2 focus:outline-blue-300" 
                  placeholder="OTP" /> <br/>
                
                <div>
                  <p className="flex justify-end cursor-pointer opacity-80">Didn't get a mail? <span className="text-blue-700 font-extrabold mx-2">Resend</span></p>
                </div>
                <input 
                  type="submit" 
                  value="Verify"
                  className="text-white h-12 w-full cursor-pointer mt-10 bg-blue-700 hover:bg-blue-500 rounded-md" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Otp