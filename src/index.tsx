import React from 'react'
import ReactDOM from 'react-dom/client'
import './_badapp/assets/index.css'
import reportWebVitals from './reportWebVitals'
import App from './app/App'
import { BadappI18nProvider } from './_badapp/i18n/Badapp18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BadappI18nProvider>
      <App />
    </BadappI18nProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
