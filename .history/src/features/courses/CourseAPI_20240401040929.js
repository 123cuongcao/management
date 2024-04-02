import axiosInstance from "../../common/api/axiosConfig";
import axios from "/src/common/api/axiosConfig";

export const findAll = (page, size, keyword) => {
  return axiosInstance.get(`/api/courses?page=${page}&size=${size}&keyword=${keyword}`); 
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

export const getClassFromCourse(id)=>{
    return axiosCo
}
