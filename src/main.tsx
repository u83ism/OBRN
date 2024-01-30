import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { changeDB } from "./repository/firestore.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// await changeDB()