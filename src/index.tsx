import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom/client'
import './_saro/assets/index.css'
import reportWebVitals from './reportWebVitals'
import { SaroI18nProvider } from './_saro/i18n/Saroi18n'
import { ThemeProvider } from '@material-tailwind/react'
import { AuthProvider, setupAxios } from './app/modules/auth'
import { AppRoutes } from './app/routing/AppRoutes'

setupAxios(axios)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SaroI18nProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </SaroI18nProvider>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
