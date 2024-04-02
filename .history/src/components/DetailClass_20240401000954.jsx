
"use client";

import { Button, Modal, ModalHeader } from "flowbite-react";
import { useState } from "react";

export default function DetailClass({data}) {
  const [openModal, setOpenModal] = useState(false);

  const [openModalClass, setOpenModalClass] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Xem</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="p-4" >{data?.name}</Modal.Header>
        <Modal.Body>
      
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>setOpenModalClass(true)}>
                Danh sách lớp học 
            </Button>
            <Modal show={openModalClass}>
                <ModalHeader> </ModalHeader>
            </Modal>
            
        </Modal.Footer>
      </Modal>
    </>
  );
}
