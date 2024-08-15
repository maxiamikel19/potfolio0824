import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
