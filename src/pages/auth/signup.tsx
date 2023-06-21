import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [emailInput, setEmailInput] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();


  const handleSignup = () => {
    navigate('/verify-email');
  }
  return (
    <>
    <div className="bg-[#919191] h-screen w-screen flex justify-center items-center font-lato">
      <div className="bg-white h-[36rem] w-[75rem]">
        <div className="flex justify-center items-center p-6">  
          <div className="w-1/2 bg-blue-100 rounded-md flex justify-center">
            <img className="h-[32rem] w-[36rem]" src="https://i.ibb.co/GVcF2r7/signup.png" alt="signup" />
          </div>
          <div className="w-1/2 px-24 self-start pt-2">
            <div className="mb-5">
              <h1 className="font-bold text-2xl my-2">Sign Up</h1>
              <p className="text-sm">Already have an account? <span className="text-blue-500 font-bold cursor-pointer"><Link to={"/"}>Signin</Link></span></p>
            </div>
            <div>
              <form className="relative">
                {/* Email field */}
                <label>Email Address</label><br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-50 absolute top-10 left-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input 
                  value={emailInput} 
                  onChange={(e) => setEmailInput(e.target.value)} 
                  className="h-12 w-full rounded-md mb-5 border pl-12 py-2 focus:outline-blue-300" 
                  placeholder="e.g. you@example.com" /> <br/>
                
                {/* Create Password field */}
                <label>Create Password</label> <br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-50 absolute top-[132px] left-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <input 
                  type='password'
                  value={createPassword} 
                  onChange={(e) => setCreatePassword(e.target.value)}  
                  className="h-12 w-full rounded-md border mb-5 pl-12 py-2 focus:outline-blue-300" 
                  placeholder="Enter your password" aria-placeholder="Empty" /> <br/>
                
                {/* Confirm Password field */}
                <label>Confirm Password</label> <br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-50 absolute top-[224px] left-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <input 
                  type='password'
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}  
                  className="h-12 w-full rounded-md border pl-12 py-2 focus:outline-blue-300" 
                  placeholder="Enter your password" aria-placeholder="Empty" /> <br/>
                <input 
                  type="submit" 
                  value="Sign up"
                  onClick={handleSignup}
                  className="text-white h-12 w-full cursor-pointer mt-6 bg-blue-700 hover:bg-blue-500 rounded-md" />
              </form>

              <div className="flex my-4">
                <hr className="w-full mt-3" /><span className="mx-2">Or</span><hr className="w-full mt-3"/>
              </div>

              <button className="rounded-2xl py-4 border-2 w-full flex justify-center">
                <img className="h-6 w-6 mt-1" src="https://i.ibb.co/ZBRPZBn/google-icon.png" alt='google icon' />
                <p className="mt-1 mx-2">Continue with Google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp