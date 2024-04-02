import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Table from "../../components/Table";
import BodyHeader from "../../components/BodyHeader";

function StudentManagement() {
  return (
    <>
      <Header />
      <SideBar />
      
    
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
        <Table />
        <Pagination />
        <BodyHeader/>
        </div>
      </div>
    </>
  );
}

export default StudentManagement;
