import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/admin/adminPage'
import HomePage from './pages/home/homePage'
import Testing from "./components/testing"
import LoginPage from "./pages/login/login"
import RegisterPage from './pages/register/register'
import VerifyEmail from './pages/verifyEmail/verifyEmail'
import { Toaster } from 'react-hot-toast'
import { Auth0Provider } from "@auth0/auth0-react"
import AuthCallBack from './pages/auth/AuthCallBack';

function App() {
  const onRedirectCallback = (appState) => {
    window.history.replaceState(
      {},
      document.title,
      appState?.returnTo || window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin + "/callback",
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <BrowserRouter>
        <Toaster position='top-right' />
        <Routes>
          <Route path="/testing" element={<Testing />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/callback" element={<AuthCallBack />} />
          					<Route path="/*" element={<HomePage />} />


        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  )
}

export default App
