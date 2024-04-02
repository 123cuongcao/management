import axiosInstance from "../../common/api/axiosConfig";

export const findAll = ()=>{
    return axiosInstance.get(`api/teachers?p`)
}