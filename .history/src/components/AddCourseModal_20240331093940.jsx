import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal as Modal1 } from "antd";
import * as Yup from "yup";
import { addCourse } from "/src/features/courses/CourseSlice.js";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  courseTime: Yup.number().required("Required").positive().integer(),
});

// eslint-disable-next-line react/prop-types
export default function AddCourseModal() {
  const error = useSelector((state) => state.courses.error);
  const formikRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error && formikRef.current) {
      formikRef.current.setErrors({
        title: error?.errorsDetails.title,
        description: error?.errorsDetails.description,
        courseTime: error?.errorsDetails.courseTime,
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
