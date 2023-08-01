import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId="949770359657-4oiout43buu6ntr180gq2opsn3id9b6e.apps.googleusercontent.com">
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
  </GoogleOAuthProvider>
  
)
