
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/LoginPage.jsx";
import SearchBar from './components/SearchBar.jsx';
import SideBar from './components/SideBar.jsx';
// import Table from "./components/Table.jsx"
import SideBarWithNavBar from "./components/SideBarWithNavBar.jsx"
import Header from "./components/Header.jsx"
import Pagination from "./components/Pagination.jsx"
import AddClassModal from "./components/AddClassModal.jsx"
// import EditModal from "./components/EditModal.jsx"
import ClassManagement from "./pages/Management/ClassManagement.jsx"
import StudentManagement from "./pages/Management/StudentManagement.jsx"
import CourseManagement from "./pages/Management/CourseManagement.jsx"
import TeacherManagement from "./pages/Management/TeacherManagement.jsx"
import ModuleCourseManagement from "./pages/Management/ModuleCourseManagement.jsx"

import "./App.css"

function App() {
  return (
    <>
        <Header />
      <SideBar />
    </>
  
  
  );
}

export default App;
