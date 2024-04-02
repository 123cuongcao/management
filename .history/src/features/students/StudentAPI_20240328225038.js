import axiosInstance from "../../common/api/axiosConfig";

export const findAll = (page, size, keyword) => {
  return axiosInstance.get(
    `/api/students?page=${page}&size=${size}&keyword=${keyword}`
  );
};

export const edit = (id, data) => {
  return axiosInstance.put(`/api/students/${id}`, data);
};

export const add = (data) => {
    return axiosInstance.post("/api/students", data);
}
export const remove =( id)=>{
  return axiosInstance.delete(`/api/students/${id}`)
}

export const exportExcel = (file)=>{
  const formData = new FormData();
  formData.append("file", file);
  return axios.post('/upload-excel', formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  });
}