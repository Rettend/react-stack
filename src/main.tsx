import App from '@/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import '@fontsource-variable/league-spartan'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
