import React, { Suspense } from 'react'
import { AppRoutes } from './routing/AppRoutes'
import { I18nProvider } from '../_badapp/i18n/i18nProvider'

function App() {
  return (
    <Suspense>
      <I18nProvider>
        <AppRoutes />
      </I18nProvider>
    </Suspense>
  )
}

export default App
