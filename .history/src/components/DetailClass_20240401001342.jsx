"use client";

import { Button, Modal, ModalBody, ModalHeader, Table } from "flowbite-react";
import { useState } from "react";

export default function DetailClass({ data }) {
  const [openModal, setOpenModal] = useState(false);

  const [openModalClass, setOpenModalClass] = useState(false);

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
          <Modal show={openModalClass} onCl>
            <ModalHeader >Danh sách học sinh</ModalHeader>
            <ModalBody>
              <div className="overflow-x-auto">
                <Table>
                  <Table.Head>
                    <Table.HeadCell>Product name</Table.HeadCell>
                    <Table.HeadCell>Color</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>
                      <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {'Apple MacBook Pro 17"'}
                      </Table.Cell>
                      <Table.Cell>Sliver</Table.Cell>
                      <Table.Cell>Laptop</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Microsoft Surface Pro
                      </Table.Cell>
                      <Table.Cell>White</Table.Cell>
                      <Table.Cell>Laptop PC</Table.Cell>
                      <Table.Cell>$1999</Table.Cell>
                      <Table.Cell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Magic Mouse 2
                      </Table.Cell>
                      <Table.Cell>Black</Table.Cell>
                      <Table.Cell>Accessories</Table.Cell>
                      <Table.Cell>$99</Table.Cell>
                      <Table.Cell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </ModalBody>
          </Modal>
        </Modal.Footer>
      </Modal>
    </>
  );
}
