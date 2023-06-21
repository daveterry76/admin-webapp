import { Routes, Route } from "react-router-dom"
import ForgotPassword from "./pages/auth/forgot-password"
import Otp from "./pages/auth/otp"
import SignIn from "./pages/auth/signin"
import SignUp from "./pages/auth/signup"
import Main from "./pages/main/main"



function App() {

  return (
    
        <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/verify-email" element={<Otp />} />
              <Route path="/reset-password" element={<ForgotPassword />} />
              <Route path="/home" element={<Main />} />
        </Routes>
      
    
  )
}

export default App
