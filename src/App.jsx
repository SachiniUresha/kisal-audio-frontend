import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/admin/adminPage'
import HomePage from './pages/home/homePage'
import Testing from "./components/testing"
import LoginPage from "./pages/login/login"
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/register/register'
import { GoogleOAuthProvider } from '@react-oauth/google'
import VerifyEmail from './pages/verifyEmail/verifyEmail'




 


function App() {

  return (

    <GoogleOAuthProvider clientId="807779157914-h71nfftf52gs5cd6nn2fsooh31r54al4.apps.googleusercontent.com">


    <BrowserRouter>

    <Toaster
    position='top-right'/>
      <Routes path="/*">
        <Route path="/testing" element={<Testing/>}/>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/*" element = {<HomePage/>}/>
        <Route path="/login" element = {<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>



      </Routes>

    </BrowserRouter>
    </GoogleOAuthProvider>


  )
}

export default App
