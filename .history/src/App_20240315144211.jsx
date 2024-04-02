// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import {AdminPage} from  "./pages/Admin/AdminPage";
import {HomePage} from  "./pages/Home/HomePage"
import LoginPage from './pages/Login/Login';

function App() {

  return (
    <Router>
    {/* <NavBar /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students" element={<AdminPage />} />
      <Route path = "/login" element={<LoginPage/>}/>
    </Routes>
  </Router>
  )
}

export default App
