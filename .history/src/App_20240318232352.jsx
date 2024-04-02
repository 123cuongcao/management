// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {AdminPage} from  "./pages/Admin/AdminPage";
// import {HomePage} from  "./pages/Home/HomePage"
import Login from "./pages/Login/LoginPage.jsx";
import SearchBar from './components/SearchBar.jsx';
import SideBar from './components/SideBar.jsx';
import Table from "./components/"

function App() {
  return (
    <BrowserRouter>
     
        {/* <NavBar /> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<AdminPage />} /> */}
          {/* <Route path = "/login" element={<Login/>}/> */}
          <Route path="/" element={<Login />} />
          <Route path="/searchbar" element = {<SearchBar/>}/>
          <Route path="/sidebar" element = {<SideBar/>}/>
          <Route path="/sidebar" element = {<SideBar/>}/>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
