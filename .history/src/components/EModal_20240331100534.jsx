import { Formik, Field, Form, ErrorMessage } from "formik";
// import { useEffect, useState } from "react";
import { Modal as Modal1 } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { edit } from "../features/classes/ClassSlice.js";
import { Button, Modal } from "flowbite-react";

const ProductSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  coursesId: Yup.string().required("Required"),
  maxStudent: Yup.number().required("Required").positive().integer(),
  startTime: Yup.date().required("Required"),
});

// eslint-disable-next-line react/prop-types
function EModal({ data }) {
  const error = useSelector((state) => state.classes.error);
  const formikRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error && formikRef.current) {
      formikRef.current.setErrors({
        name: error?.errorsDetails.name,
        coursesId: error?.errorsDetails.address,
        maxStudent: error?.errorsDetails.email,
        startTime: error?.errorsDetails.dob,
      });
    }
  }, [error]);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Sửa</Button>
      <Modal show={openModal} size="md" onClose={handleCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Thêm lớp mới
            </h3>
            <Formik
              enableReinitialize
              initialValues={{
                name: data?.name,
                coursesId: data?.courses?.courseId,
                maxStudent: data?.maxStudent,
                startTime: data?.startTime,
              }}
              validationSchema={ProductSchema}
              onSubmit={(values, actions) => {
                console.log("value", values);
                console.log("id", data?.id);

                Modal1.confirm({
                  title: "Xác nhận sửa",
                  content: `Bạn có chắc chắn với hành dộng8 này?`,
                  onOk: () => {
                    dispatch(edit({ classId: data?.id, classData: values }))
                      .unwrap()
                      .then(() => {
                        actions.resetForm();
                        document.getElementById("editButton1").click();
                      })
                      .catch(() => {
                        // console.log('error', err);
                      });
                  },
                  onCancel: () => {},
                });
              }}
            >
              {({ errors, touched }) => (
                <Form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>

                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Max student
                      </label>

                      <Field
                        type="number"
                        name="maxStudent"
                        id="maxStudent"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                      <ErrorMessage
                        name="maxStudent"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Course
                      </label>

                      <Field
                        type="text"
                        name="coursesId"
                        id="coursesId"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                      <ErrorMessage
                        name="coursesId"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Start time
                      </label>

                      <Field
                        type="date"
                        name="startTime"
                        id="startTime"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                      <ErrorMessage
                        name="startTime"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default EModal;
