import axiosInstance from "../../common/api/axiosConfig";
import axios from "/src/common/api/axiosConfig";

export const findAll = () => {
  return axiosInstance.get("/api/courses"); 
};

export const saveCourse = (data) =>{
    return  axiosInstance.post('/api/courses', data);//salva um novo curso
} 

export const deleteCourse = (id) =>{
    return axiosInstance.delete(`/api/courses/${id}`);
}

export const updateCourse = (id,data) =>{
    return axiosInstance.put(`/api/courses/${id}`,data);
} 
