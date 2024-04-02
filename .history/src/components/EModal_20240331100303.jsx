import { Formik, Field, Form, ErrorMessage } from "formik";
// import { useEffect, useState } from "react";
import { Modal as Modal1 } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useEffect, useRef } from "react";
import { edit } from "../features/classes/ClassSlice.js";

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
export default EModal;
