import axiosInstance from "../../common/api/axiosConfig";

export const findAll = (page, size, keyword) => {
  return axiosInstance.get(
    `api/teachers?page=${page}&size=${size}&keyword=${keyword}`
  );
};
