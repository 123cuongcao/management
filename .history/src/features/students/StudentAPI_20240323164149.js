import axiosInstance from "../../common/api/axiosConfig";


export const findAll = (page, size) => {
    return axiosInstance.get(`/api/classes?page=${page}&size=${size}`);
  };