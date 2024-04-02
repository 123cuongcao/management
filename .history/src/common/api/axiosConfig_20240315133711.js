import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'địa chỉ API server của bạn', 
    // Ví dụ: 'http://localhost:5000/api/'
    // cấu hình thêm headers nếu cần
  });
  