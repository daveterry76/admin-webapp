import { Routes, Route } from "react-router-dom"
import ForgotPassword from "./pages/auth/forgot-password"
import Otp from "./pages/auth/otp"
import SignIn from "./pages/auth/signin"
import SignUp from "./pages/auth/signup"
import Main from "./pages/main/main";
import BrandAdvertMain from "./pages/main/brand-advert-components/brand-advert-main"
import BookAdvertMain from "./pages/main/book-advert-components/book-advert-main"
import PaymentsMain from "./pages/main/payments-components/payment-main"
import VasMain from "./pages/main/vas-components/vas-main"
import SettingsMain from "./pages/main/Settings-components/settings-main"



function App() {

  return (
    
        <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/verify-email" element={<Otp />} />
              <Route path="/reset-password" element={<ForgotPassword />} />
              <Route path="/home" element={<Main />} />
              <Route path="/brand-advert" element={<BrandAdvertMain />} />
              <Route path="/booked-adverts" element={<BookAdvertMain />} />
              <Route path="/payments" element={<PaymentsMain />} />
              <Route path="/vas-self-service" element={<VasMain />} />
              <Route path="/settings" element={<SettingsMain />} />
        </Routes>
      
    
  )
}

export default App
