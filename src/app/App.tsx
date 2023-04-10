import React, { Suspense } from 'react'
import { AppRoutes } from './routing/AppRoutes'

function App() {
  return (
    <Suspense>
      <AppRoutes />
    </Suspense>
  )
}

export default App
