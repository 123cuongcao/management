import { Button, Modal, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DetailCourseClass({data}) {
    const [openModal,setOpenModal] =useState(false);
    const classes = useSelector(state=> state.courses.classes);
    useEffect(()=>{
        
    })


  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Xem</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="p-4">{data?.title}</Modal.Header>
        <Modal.Body>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>Họ và Tên</Table.HeadCell>
                <Table.HeadCell>SDT</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>DOB</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {classes?.map((std) => {
                  return (
                    <Table.Row
                      key={std.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell>{std.id}</Table.Cell>
                      <Table.Cell>{std.name}</Table.Cell>
                      <Table.Cell>{std.maxStudent}</Table.Cell>
                      <Table.Cell>{std.startTime}</Table.Cell>
                      <Table.Cell>{std.teacher.name}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
