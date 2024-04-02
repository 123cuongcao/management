import axiosInstance from "../../common/api/axiosConfig";

export const save = (data) => {
  return axiosInstance.post("/api/classes", data);
};

export const edit = (id, data) => {
  return axiosInstance.put(`/api/classes/${id}`, data);
};
export const delete = (id) => {
  return axiosInstance.delete(`/api/classes/${id}`);
  
