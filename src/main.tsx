import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SocketContextComponent from './components/hooks/socket-reducers/Component'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SocketContextComponent>
      <App />
    </SocketContextComponent>
  </StrictMode>,
)
