import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
// import Table from "../../components/Table";
import Add from "../../components/Add";
import Modal from "../../components/Modal";
import Test from "../../components/Test";
import EditModal from "../../components/EditModal";
import BodyHeader from "../../components/BodyHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchClass,
  selectAllClass,
  deleteC,
  saveNewClass,
  edit,
} from "/src/features/classes/ClassSlice.js";
import { Link } from "react-router-dom";
// import {Loader} from "react-loader-spinner";
// import { TailSpin } from 'react-loader-spinner';

function ClassManagement() {
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const handleButton1Click = () => {
    // Xử lý khi click vào button 1
    setButton1Clicked(true);
    // Gọi hàm hoặc thực hiện các hành động khác khi click vào button 1
    // Ví dụ: fetchData();
  };

  const dispatch = useDispatch();

  const classes = useSelector((state) => state.classes.class);
  const fetchStatus = useSelector((state) => state.classes.status);
  const error = useSelector((state) => state.classes.error);
  const [status, setStatus] = useState("Inactive");

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchClass({ page: 0, size: 10 }));
    }
  }, [dispatch, fetchStatus]);

  const handleDelete = (classId) => {
    // Confirmation dialog để người dùng xác nhận trước khi xóa
    if (window.confirm("Are you sure you want to delete this class?")) {
      dispatch(deleteC(classId)); // store action
    }
  };

  const handleAdd = (value) => {
    dispatch(saveNewClass(value));
  };

  const handleEdit = ({ id, data }) => {
    dispatch(edit({ id, data }));
  };

  let id = new Date();
  // console.log("classes", classes);

  // if (fetchStatus === "loading") {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <Loader
  //         type="TailSpin" // Có nhiều loại spinner khác nhau bạn có thể chọn
  //         color="#00BFFF" // Màu của spinner, bạn có thể tùy chỉnh
  //         height={100} // Chiều cao của spinner
  //         width={100} // Chiều rộng của spinner
  //       />
  //     </div>
  //   );
  // } else if (fetchStatus === "failed") {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <>
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
            <BodyHeader />
            <Modal onAdd={handleAdd} />
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Học sinh tối đa
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tên lớp
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thời gian bắt đầu
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Trạng thái
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Khóa học
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Giảng viên
                  </th>
                  <th className="text-center ">Action</th>
                </tr>
              </thead>

              <tbody>
                {classes?.map((cls) => {
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
                      <td className="px-6 py-4">{cls.maxStudent}</td>
                      <td className="px-6 py-4">{cls.name}</td>

                      <td className="px-6 py-4">{cls.startTime}</td>

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
                      <td className="px-6 py-4">{cls.courses.title}</td>
                      <td className="px-6 py-4"></td>
                      {/* <td className="px-6 py-4">{cls.teacher.name}</td> */}

                      <td className="px-6 py-4 text-right">
                        <a
                          onClick={() => handleDelete(cls.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </a>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
{/* {   <button
        data-modal-target={`popup-modal-${9999}`}
        data-modal-toggle={`popup-modal-${9999}`}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={()=>{
          document.getElementById(`popup-modal-${9999}`).click();
        }}
      >
        Edit 
      </button>} */}


                        </a>
                      </td>
                    </tr>
                  );
                })}

                {/*  */}
{   <button
  id={`popup-modal-${9999}`}
  data-modal-target={`popup-modal-${9999}`}
  data-modal-toggle={`popup-modal-${9999}`}
  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  type="button"
  onClick={()=>{
    console.log("id",9999)
  }}
>
  Toggle modal 99999
</button>}
{
  <div
        id={`popup-modal-${id}`}
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide={`popup-modal-${id}`}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <button
                data-modal-hide={`popup-modal-${id}`}
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                data-modal-hide={`popup-modal-${id}`}
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
}
              </tbody>
            </table>

            <EditModal />
           
          </div>
          {/* <table>
            <tr>
              <th>1</th>
            </tr>
            <tr>
              <td>
                <EditModal />
              </td>
            </tr>
          </table> */}

          <Pagination />

          {/* <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              defaultValue=""
              className="sr-only peer"
              defaultChecked="Active"
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Checked toggle
            </span>
          </label> */}
        </div>
      </div>
    </>
  );
}

export default ClassManagement;
