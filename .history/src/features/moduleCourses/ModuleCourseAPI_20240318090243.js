import axiosInstance from "../../common/api/axiosConfig";

export const save = (data) =>{
    return axiosInstance.post('api/module-courses', data);
}

export const edit = (id, data)=>{
    return axiosInstance.put(`api/module-courses/${id}`, data);
}
 
export const deleteMD = (id)=>{
    return axiosInstance.delete(``)
}