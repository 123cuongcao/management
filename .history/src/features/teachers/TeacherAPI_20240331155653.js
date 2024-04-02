import axiosInstance from "../../common/api/axiosConfig";

export const findAll = (page, size, keyword) => {
  return axiosInstance.get(
    `api/teachers?page=${page}&size=${size}&keyword=${keyword}`
  );
};

export const save = (data) => {
  return axiosInstance.post(`api/teachers`, data);
};

export const edit = (id,data) =>{
    return axiosInstance.put(`api/teachers/${id}`,data);
}

export const deleteT =()=>{
  return axiosIn
}