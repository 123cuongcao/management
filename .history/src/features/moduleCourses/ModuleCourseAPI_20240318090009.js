import axiosInstance from "../../common/api/axiosConfig";

export const save = (data) =>{
    return axiosInstance.post('/save-product', data);
}