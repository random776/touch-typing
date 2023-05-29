import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import EffectClass from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EffectClass />
  </React.StrictMode>,
)