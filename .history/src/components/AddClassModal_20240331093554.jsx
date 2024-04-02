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
      <Button onClick={() => setOpenModal(true)}>Thêm mới</Button>
      <Modal show={openModal} size="md" onClose={handleCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Thêm module mới
            </h3>

          
          </div>
        </Modal.Body>
      </Modal>
      
   
       
    </>
  );
}
export default AddClassModal;
