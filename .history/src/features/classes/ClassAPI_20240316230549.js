import axiosInstance from "../../common/api/axiosConfig";

export const save = (data) =>{
    return axiosInstance.post('/api/classes',data);
}  

expot