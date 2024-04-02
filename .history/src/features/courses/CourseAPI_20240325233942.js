import axiosInstance from "../../common/api/axiosConfig";
import axios from "/src/common/api/axiosConfig";

export const findAll = () => {
  return axiosInstance.get("/api/coursespage=${page}&size=${size}&keyword=${keyword}"); 
};

export const saveCourse = (data) =>{
    return  axiosInstance.post('/api/courses', data);
} 

export const deleteCourse = (id) =>{
    return axiosInstance.delete(`/api/courses/${id}`);
}

export const updateCourse = (id,data) =>{
    return axiosInstance.put(`/api/courses/${id}`,data);
} 
