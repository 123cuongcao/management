import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal as Modal1 } from "antd";
import * as Yup from "yup";
import { editTeacher } from "../features/teachers/TeacherSlice.js";

const ProductSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    phoneNumber: Yup.number().required("Required").positive().integer(),
    address: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
});

// eslint-disable-next-line react/prop-types
export default function EditTeacherModal({data}) {
  const error = useSelector((state) => state.teachers.error);
  const formikRef = useRef();
  console.log("er222222",error)

  const dispatch = useDispatch();
  useEffect(() => {
    if (error && formikRef.current) {
       
      formikRef.current.setErrors({
        name: error?.errorsDetails.name,
        email: error?.errorsDetails.email,
        phoneNumber: error?.errorsDetails.phoneNumber,
        address: error?.errorsDetails.address,
        dob: error?.errorsDetails.dob,
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

    
     
       */}
    </>
  );
}
