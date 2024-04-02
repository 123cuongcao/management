import axiosInstance from "../../common/api/axiosConfig";

export const findAll = (page, size, keyword) => {
  return axiosInstance.get(
    `api/teachers?page=${page}&size=${size}&keyword=${keyword}`
  );
};

export const save = (data) => {
    return axiosInstance.get(
      `api/teachers?page=${page}&size=${size}&keyword=${keyword}`
    );
  };
  