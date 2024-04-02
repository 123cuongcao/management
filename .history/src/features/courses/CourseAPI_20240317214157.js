import axiosInstance from "../../common/api/axiosConfig";
import axios from "/src/common/api/axiosConfig";

export const findAll = () => {
  return axiosInstance.get("/api/users"); //retorna todos os usuários cadastrados no ban
};

export const saveCourse = (data) =>{
    return  axiosInstance.post('/api/courses', data);//salva um novo curso
} 

export const deleteCourse = (id) =>{
    return axiosInstance.delete(`/api/courses/${data}`).then((response)=>{
}
