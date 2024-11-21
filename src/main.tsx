import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import List from './App'
import Canvas from './App'
import ShoppingCart from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShoppingCart />
  </StrictMode>
)
