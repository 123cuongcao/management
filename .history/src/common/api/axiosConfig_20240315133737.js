import axios from 'axios';
exp const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/', 
    // Ví dụ: 'http://localhost:5000/api/'
    // cấu hình thêm headers nếu cần
  });
  