import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/rubik/700.css'
import '@fontsource/rubik/800.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
