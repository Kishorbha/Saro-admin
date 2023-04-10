import { ForgotPassword } from './components/ForgotPassword'
import { Login } from './components/Login'
import { Routes, Route } from 'react-router-dom'
import VerityOtp from './components/VerifyOtp'
import ResetPassword from './components/ResetPassword'

const AuthPage = () => (
  <Routes>
    <Route path='login' element={<Login />} />
    <Route path='forgot-password' element={<ForgotPassword />} />
    <Route path='verify-otp' element={<VerityOtp />} />
    <Route path='reset-password' element={<ResetPassword />} />
    <Route index element={<Login />} />
  </Routes>
)

export { AuthPage }
