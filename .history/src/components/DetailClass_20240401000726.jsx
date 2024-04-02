
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function DetailClass({data}) {
  const [openModal, setOpenModal] = useState(false);

  const [openModalClass, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="p-4" >{data?.name}</Modal.Header>
        <Modal.Body>
      
        </Modal.Body>
        <Modal.Footer>
            <Button>
                Danh sách lớp học 
            </Button>
            
        </Modal.Footer>
      </Modal>
    </>
  );
}
