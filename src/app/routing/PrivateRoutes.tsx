import { Navigate, Route, Routes } from 'react-router-dom'
import { MasterLayout } from '../../_saro/layout/MasterLayout'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        <Route path='dashboard' element={<DashboardWrapper />} />
      </Route>
    </Routes>
  )
}

export { PrivateRoutes }
