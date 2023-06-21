import { useState } from "react"
import { Link } from "react-router-dom";


const ForgotPassword = () => {
    const [emailInput, setEmailInput] = useState('')
  

  return (
    <>
    <div className="bg-[#919191] h-screen w-screen flex justify-center items-center font-lato">
      <div className="bg-white h-[36rem] w-[75rem]">
        <div className="flex justify-center items-center p-6">  
          <div className="w-1/2 bg-blue-100 rounded-md flex justify-center">
            <img className="h-[32rem] w-[36rem]" src="https://i.ibb.co/qr6YzZS/resetpassword.png" alt="reset password" />
          </div>  
          <div className="w-1/2 px-24 self-start pt-16">
            <div className="mb-9">
              <h1 className="font-bold text-2xl my-2">Forgot Password?</h1>
              <p className="text-sm">Lost your password? No worries we have you covered</p>
            </div>
            <div>
              <form className="relative">
              <label>Email Address</label><br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-50 absolute top-[53px] left-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input 
                  value={emailInput} 
                  onChange={(e) => setEmailInput(e.target.value)} 
                  className="h-12 w-full rounded-md mb-5 mt-3 border pl-12 py-2 focus:outline-blue-300" 
                  placeholder="e.g. you@example.com" /> <br/>
                <div>
                  <p className="flex justify-start cursor-pointer opacity-80">Remember password? <span className="text-blue-700 font-extrabold mx-1"><Link to={"/"}>Sign In</Link></span></p>
                </div>
                <input 
                  type="submit" 
                  value="Reset Password"
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

export default ForgotPassword