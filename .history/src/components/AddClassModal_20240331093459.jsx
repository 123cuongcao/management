import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Modal as Modal1 } from "antd";
import { saveNewClass } from "../features/classes/ClassSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const ProductSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  coursesId: Yup.string().required("Required"),
  maxStudent: Yup.number().required("Required").positive().integer(),
  startTime: Yup.date().required("Required"),
});

// eslint-disable-next-line react/prop-types
function AddClassModal() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.classes.error);
  const formikRef = useRef();
  useEffect(() => {
    if (error && formikRef.current) {
      formikRef.current.setErrors({
        name: error?.errorsDetails.name,
        coursesId: error?.errorsDetails.coursesId,
        maxStudent: error?.errorsDetails.maxStudent,
        startTime: error?.errorsDetails.startTime,
      });
    }
  }, [error]);
  
  return (
    <>
      {/* Modal toggle */}
      <button
        id="classAdd"
        data-modal-target="crud-modal-addC"
        data-modal-toggle="crud-modal-addC"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add+
      </button>
      {/* Main modal */}
      <div
        id="crud-modal-addC"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Class
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal-addC"
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
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}

         
          </div>
        </div>
      </div>
      {/* 
      
       */}
    </>
  );
}
export default AddClassModal;
