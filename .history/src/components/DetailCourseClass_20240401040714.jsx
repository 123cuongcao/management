import { Button, Modal, Table } from "flowbite-react";
import React from "react";

export default function DetailCourseClass() {


  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Xem</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="p-4">{data?.name}</Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModalClass(true)}>
            Danh sách học sinh
          </Button>
          <Modal show={openModalClass} onClose={() => setOpenModalClass(false)}>
            <Modal.Header>Danh sách học sinh</Modal.Header>
            <Modal.Body>
            
            </Modal.Body>
          </Modal>
        </Modal.Footer>
      </Modal>
    </>
  );
}
