import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstSteps } from './FirstSteps'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstSteps />
  </StrictMode>,
)
