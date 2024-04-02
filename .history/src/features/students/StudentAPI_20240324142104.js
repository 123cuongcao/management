import axiosInstance from "../../common/api/axiosConfig";


export const findAll = (page, size) => {
    return axiosInstance.get(`/api/students?page=${page}&size=${size}&keyword=${}`);
  };