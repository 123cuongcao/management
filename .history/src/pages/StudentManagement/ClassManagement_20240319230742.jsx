import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Table from "../../components/Table";
import BodyHeader from "../../components/BodyHeader";
import { useDispatch, useSelector } from "react-redux";

function ClassManagement() {
  const dispatch = useDispatch();

  const classes = useSelector((state)=>state.classes.class);
  const  fetchStatus = useSelector((state) => state.classes.status);
  const error = useSelector((state) => state.classes.error);
    
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
