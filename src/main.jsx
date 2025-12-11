import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import AuthProvider from './Components/Context/AuthContext/AuthProvider'
import { Toaster } from 'sonner';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
