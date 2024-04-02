
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/LoginPage.jsx";
import SearchBar from './components/SearchBar.jsx';
import SideBar from './components/SideBar.jsx';
import Table from "./components/Table.jsx"
import SideBarWithNavBar from "./components/SideBarWithNavBar.jsx"
import Header from "./components/Header.jsx"
import Pagination from "./components/Pagination.jsx"
import Modal from "./components/Modal.jsx"
import EditModal from "./components/EditModal.jsx"
import ClassManagement from "./pages/Management/ClassManagement.jsx"
import StudentManagement from "./pages/Management/StudentManagement.jsx"
import CourseManag from "./pages/Management/StudentManagement.jsx"


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
          <Route path="/ClassManagement" element = {<ClassManagement/>}/>
          <Route path="/StudentManagement" element = {<StudentManagement/>}/>
          <Route path="/StudentManagement" element = {<StudentManagement/>}/>
          <Route path="/sidebarwithnavbar" element = {<SideBarWithNavBar/>}/>
          <Route path="/modal" element = {<Modal/>}/>
          <Route path="/editmodal" element = {<EditModal/>}/>
          
          
        </Routes>
      
    </BrowserRouter>
  
  );
}

export default App;
