import React from 'react'
import ReactDOM from 'react-dom/client'
import {BooksApp} from './BooksApp.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <BooksApp />
    </BrowserRouter>
  </React.StrictMode>,
)
