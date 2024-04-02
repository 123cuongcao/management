import axiosInstance from "../../common/api/axiosConfig";

export const findAll = (page, size,key) => {
    return axiosInstance.get(`api/teachers?page=${page}&size=${size}&keyword=${keyword}`)
}