import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/800.css'
import '@fontsource/barlow-condensed/700.css'
import '@fontsource/barlow-condensed/800.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/700.css'
import '@fontsource/nunito/800.css'
import './styles/base.css'
import './styles/sport.css'
import './styles/clair.css'
import './styles/local.css'

// Aperçu temporaire des propositions de design : ?style=sport | clair | local
const style = new URLSearchParams(window.location.search).get('style') || 'sport'
document.documentElement.dataset.style = style

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
