import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Header from './assets/components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
  </React.StrictMode>,
)
