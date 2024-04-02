import axios from "axios";
import axiosInstance from "../../common/api/axiosConfig";

export const saveClass = (data) => {
  return axiosInstance.post("/api/classes", data);
};

export const editClass = (id, data) => {
  return axiosInstance.put(`/api/classes/${id}`, data);
};
export const deleteClass = (id) => {
  return axiosInstance.delete(`/api/classes/${id}`);
};
export const findAll = (page, size) => {
  return axiosInstance.get(`/api/classes?page=${page}&size=${size}`);
};

export const findAllNoPage = () => {
  return axiosInstance.get("/api/classes");
};

export const findById = (id) => {
  return axiosInstance.get(`/api/classes/${id}"`);
};


export const getStudentBy = (id) => {
  return axiosInstance.get(`/api/classes/${id}"`);
};
