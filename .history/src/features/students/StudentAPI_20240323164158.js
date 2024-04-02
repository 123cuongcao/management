import axiosInstance from "../../common/api/axiosConfig";


export const findAll = (page, size) => {
    return axiosInstance.get(`/api/student?page=${page}&size=${size}`);
  };