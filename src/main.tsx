import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelloWorld } from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>,
)
