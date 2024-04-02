// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {AdminPage} from  "./pages/Admin/AdminPage";
// import {HomePage} from  "./pages/Home/HomePage"
import Login from "./pages/Login/LoginPage.jsx";

function App() {
  return (
    <BrowserRouter>
     
        {/* <NavBar /> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<AdminPage />} /> */}
          {/* <Route path = "/login" element={<Login/>}/> */}
          <Route path="/" element={<Login />} />
          <Route path="/header" element = {</>}
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
