
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function DetailClass({data}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Xem</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="p-4" >{data?.name}</Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
            <Button
        </Modal.Footer>
      </Modal>
    </>
  );
}
