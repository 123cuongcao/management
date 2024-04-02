import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import StudentAddModal from "../../components/StudentAddModal";
import BodyHeader from "../../components/BodyHeader";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
export default function ModuleCourseManagement() {

  return (
    <div>
      <Header />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
            className="flex justify-center items-start "
          >
            <BodyHeader text={"Quản lý học sinh"} />
            <StudentAddModal />
          </div>

            


    


          <Pagination />
        </div>
      </div>

     

      <></>
    </div>
  );
}
