import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router/router';
import { RouterProvider } from "react-router-dom";
import './CSS/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
)
