import { FC } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { AuthPage } from '../modules/auth'
import App from '../App'

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} />
        <Route path='auth/*' element={<AuthPage />} />
        <Route path='*' element={<Navigate to='/auth' />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
