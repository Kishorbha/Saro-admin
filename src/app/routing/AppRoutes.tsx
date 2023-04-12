import { FC } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { AuthPage, Logout, useAuth } from '../modules/auth'
import App from '../App'
import { MasterLayout } from '../../_saro/layout/MasterLayout'
import { PrivateRoutes } from './PrivateRoutes'

const AppRoutes: FC = () => {
  // const { currentUser } = useAuth()
  const currentUser = { username: 'kishor' }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='logout' element={<Logout />} />
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
