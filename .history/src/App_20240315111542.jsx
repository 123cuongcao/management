import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    {/* <NavBar /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students" element={<StudentsPage />} />
    </Routes>
  </Router>
  )
}

export default App
