import axiosInstance from "../../common/api/axiosConfig";

export const save = (data) =>{
    return axiosInstance.post('/api/classes',data);
}  

export const eidt(id, data)=>{
    return axiosInstance.put(`/api/classes/${id}`,data).then((res)=> {
        console.log('edit class success');
    }