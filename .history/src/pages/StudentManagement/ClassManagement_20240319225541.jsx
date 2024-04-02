import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Table from "../../components/Table";
import BodyHeader from "../../components/BodyHeader";

function ClassManagement() {
  const dispatch = use

    
  return (
    <>
      <Header />
      <SideBar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          <BodyHeader />
          <Table />
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default ClassManagement;
