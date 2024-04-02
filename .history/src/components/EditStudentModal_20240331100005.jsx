import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal as Modal1 } from "antd";
import * as Yup from "yup";
import {
  update,
  //   selectAllClass,
} from "/src/features/students/StudentSlice.js";
import Alert from "./Alert";

const ProductSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phoneNumber: Yup.number().required("Required").positive().integer(),
  email: Yup.string().required("Required"),
  className: Yup.string().required("Required"),
  dob: Yup.date().required("Required"),
});

// eslint-disable-next-line react/prop-types
export default function EditStudentNumber({ data }) {
  const updateError = useSelector((state) => state.students.error);
  const formikRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    if (updateError && formikRef.current) {
      formikRef.current.setErrors({
        name: updateError?.errorsDetails.name,
        address: updateError?.errorsDetails.address,
        phoneNumber: updateError?.errorsDetails.phoneNumber,
        email: updateError?.errorsDetails.email,
        dob: updateError?.errorsDetails.dob,
        className: updateError?.errorsDetails.className,
      });
    }
  }, [updateError]);

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
