
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Table from "../../components/Table";

function StudentManagement() {
  return (
    <>
        <Header/>
        <SideBar/>
        <Table/>
        <Pagination/>

        <div className="p-4 rounded-lg mt-14">
        
        </div>
    </>
  );
}

export default StudentManagement;
