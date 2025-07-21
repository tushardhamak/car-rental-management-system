
 import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { BookingsProvider } from './context/BookingsContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <BookingsProvider>
      <App />
     </BookingsProvider>      
    </BrowserRouter>
  </React.StrictMode>
)

 