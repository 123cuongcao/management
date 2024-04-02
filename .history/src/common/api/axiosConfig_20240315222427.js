import axios from 'axios';
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/user-management/', 
    // Ví dụ: 'http://localhost:5000/api/'
    // cấu hình thêm headers nếu cần
  });
  

  export default axiosInstance;