import React, { Suspense } from 'react'
import { I18nProvider } from '../_saro/i18n/i18nProvider'
import { LayoutProvider, LayoutSplashScreen } from '../_saro/layout/core'
import { AuthInit } from './modules/auth'
import { Outlet } from 'react-router-dom'
import { MasterInit } from '../_saro/layout/MasterInit'

function App() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export default App
