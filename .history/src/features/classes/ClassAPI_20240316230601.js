import axiosInstance from "../../common/api/axiosConfig";

export const save = (data) =>{
    return axiosInstance.post('/api/classes',data);
}  

export const eidt(id, data)=>{