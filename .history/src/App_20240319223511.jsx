// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {AdminPage} from  "./pages/Admin/AdminPage";
// import {HomePage} from  "./pages/Home/HomePage"
import Login from "./pages/Login/LoginPage.jsx";
import SearchBar from './components/SearchBar.jsx';
import SideBar from './components/SideBar.jsx';
import Table from "./components/Table.jsx"
import SideBarWithNavBar from "./components/SideBarWithNavBar.jsx"
import Header from "./components/Header.jsx"
import Pagination from "./components/Pagination.jsx"
import Pagination from "./components/Pagination.jsx"


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
          <Route path="/table" element = {<Table/>}/>
          <Route path="/header" element = {<Header/>}/>
          <Route path="/pagination" element = {<Pagination/>}/>
          <Route path="/sidebarwithnavbar" element = {<SideBarWithNavBar/>}/>

          
        </Routes>
      
    </BrowserRouter>
  
  );
}

export default App;
