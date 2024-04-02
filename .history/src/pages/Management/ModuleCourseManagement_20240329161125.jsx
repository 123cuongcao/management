import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import StudentAddModal from "../../components/StudentAddModal";
import BodyHeader from "../../components/BodyHeader";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
export default function ModuleCourseManagement() {
  const [openModal, setOpenModal] = useState(false);
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




          <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={() => setOpenModal(false)}>
                    {"Yes, I'm sure"}
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>




          <Pagination />
        </div>
      </div>

     

      <></>
    </div>
  );
}
