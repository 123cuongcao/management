// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import {AdminPage} from  "./pages/Admin";
import {HomePage} from  ""

function App() {

  return (
    <Router>
    {/* <NavBar /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students" element={<AdminPage />} />
    </Routes>
  </Router>
  )
}

export default App
