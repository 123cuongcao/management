import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import AddModuleCourseModal from "../../components/AddModuleCourseModal.jsx";
import EditModuleCourseModal from "../../components/EditModuleCourseModal.jsx";
import BodyHeader from "../../components/BodyHeader";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
// import { Modal, Button } from "flowbite-react";
import { Modal } from "antd";
// import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchModuleCourse,
  deleteM,
} from "../../features/moduleCourses/ModuleCourseSlice.js";

export default function ModuleCourseManagement() {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const status = useSelector((state) => state.moduleCourses.status);
  const moduleCourses = useSelector(
    (state) => state.moduleCourses.moduleCourse
  );
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchModuleCourse());
    }
  }, [moduleCourses,status,dispatch]);

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
            <BodyHeader text={"Quản lý Module"} />
            <AddModuleCourseModal />
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              {/* THead */}
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Module
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thời gian
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tên khóa học
                  </th>
                 
                  <th scope="col" className="px-6 py-3">
                    Trạng thái
                  </th>
                  <th colSpan={2} className="text-center ">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {moduleCourses?.map((cls) => {
                  return (
                    <tr
                      key={cls.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {cls.id}
                      </th>
                      <td className="px-6 py-4">{cls.moduleName}</td>
                      <td className="px-6 py-4">{cls.time}</td>

                      <td className="px-6 py-4">{cls.course.title}</td>
                      {/* <td className="px-6 py-4">{cls.dob}</td>
                      <td className="px-6 py-4">{cls?.aclass?.name}</td> */}
                      <td className="px-6 py-4">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                            defaultChecked="Active"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                          {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Checked toggle
                          </span> */}
                        </label>
                      </td>
                      {/* <td className="px-6 py-4">{cls.teacher.name}</td> */}

                      <td className="px-6 py-4 text-right">
                        <a
                          onClick={() => {
                            Modal.confirm({
                              title: "Xác nhận",
                              content: "Bạn có muốn thực hiện hành động này?",
                              onOk: () => {
                                dispatch(deleteM(cls.id))
                                  .then(() => {})
                                  .catch(() => {});
                              },
                              onCancel: () => {},
                            });
                          }}
                          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Delete
                        </a>
                      </td>

                      <td className="px-6 py-4 text-right">
                        {/* <a
                          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={() => {
                            setData(cls);
                            document.getElementById("editButton2").click();
                          }}
                        >
                          Edit
                        </a> */}
{/* 
                        <a
                          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={() => {
                            setData(cls);
                            document.getElementById("editButton2").click();
                          }}
                        >
                          Edit
                        </a> */}
                        
                      </td>
                    </tr>
                  );
                })}

                {/*  */}
              </tbody>
            </table>
            {
              <a
                style={{ display: "none" }}
                id="editButton2"
                data-modal-target="crud-modal-edit2"
                data-modal-toggle="crud-modal-edit2"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              ></a>
            }

            {/* {<EditStudentModal data={data} />} */}

            {/* <EModal data={data} /> */}
          </div>

          <Pagination />
        </div>
      </div>

      <></>
    </div>
  );
}
