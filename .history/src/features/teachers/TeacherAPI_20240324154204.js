import axiosInstance from "../../common/api/axiosConfig";

export const findAll = (page, size) => {
    return axiosInstance.get(`api/teachers?page=${page}&size=${size}&keyword=${keyword}`)
}