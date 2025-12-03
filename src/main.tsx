import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/_general.css'
import '../styles/_header.css'
import '../styles/_hero.css'
import '../styles/_features.css'
import '../styles/_extensions.css'
import '../styles/_faq.css'
import '../styles/_newsletter.css'
import '../styles/_footer.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)