import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReducerCounter from './Componenet/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReducerCounter />
  </StrictMode>,
)
