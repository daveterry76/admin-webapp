import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import Profile from "../main/home-components/profile";

const SignIn = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/profile');
    // navigate('/home');
  }
  // client id = 949770359657-4oiout43buu6ntr180gq2opsn3id9b6e.apps.googleusercontent.com

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse)
      // navigate('/home', { state: { profile: profile } });
    },
    onError: (error) => console.log('Login Failed:', error)
  });
  
  const logOut = () => {
    googleLogout();
    setProfile(null);
};

  useEffect(
    () => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                    console.log(res.data);
                    navigate("/home", { state: { profile: res.data } });
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
);


  return (
    <>
    {profile && user.access_token != undefined ?(
        <Profile profile={profile} />
      ) : (
        <div className="bg-[#919191] h-screen w-screen flex justify-center items-center font-lato">
      <div className="bg-white h-[36rem] w-[75rem]">
        <div className="flex justify-center items-center p-6">  
          <div className="w-1/2 bg-blue-100 rounded-md flex justify-center">
            <img className="h-[32rem] w-[36rem]" src="https://i.ibb.co/QMPZJdy/signinn.png" alt="signinn" />
          </div>  
          <div className="w-1/2 px-24 self-start pt-10">
            <div className="mb-9">
              <h1 className="font-bold text-2xl my-2">Sign In</h1>
              <p className="text-sm">Don't have an account? <span className="text-blue-500 font-bold cursor-pointer"><Link to={"/signup"}>Signup</Link></span></p>
            </div>
            <div>
              <form className="relative">
                <label>Email Address</label><br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-50 absolute top-10 left-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input 
                  value={emailInput} 
                  onChange={(e) => setEmailInput(e.target.value)} 
                  className="h-12 w-full rounded-md mb-5 border pl-12 py-2 focus:outline-blue-300" 
                  placeholder="e.g. you@example.com" /> <br/>
                <label>Password</label> <br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-50 absolute top-[132px] left-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>

                <input 
                  type='password'
                  value={passwordInput} 
                  onChange={(e) => setPasswordInput(e.target.value)}  
                  className="h-12 w-full rounded-md border pl-12 py-2 focus:outline-blue-300" 
                  placeholder="Enter your password" aria-placeholder="Empty" /> <br/>
                <div>
                  <p className="flex justify-end cursor-pointer opacity-50"><Link to={"/reset-password"}>Forgot Password?</Link></p>
                </div>
                <input 
                  onClick={handleSubmit}
                  type="submit" 
                  value="Sign in"
                  className="text-white h-12 w-full cursor-pointer mt-10 bg-blue-700 hover:bg-blue-500 rounded-md" />
              </form>

              <div className="flex my-4">
                <hr className="w-full mt-3" /><span className="mx-2">Or</span><hr className="w-full mt-3"/>
              </div>

              <button onClick={() => login()} className="rounded-2xl py-4 border-2 w-full flex justify-center">
                <img className="h-6 w-6 mt-1" src="https://i.ibb.co/ZBRPZBn/google-icon.png" alt='google icon' />
                <p className="mt-1 mx-2">Continue with Google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    
    </>
  )
}

export default SignIn