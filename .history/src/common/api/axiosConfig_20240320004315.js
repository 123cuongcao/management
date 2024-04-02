import axios from 'axios';
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/user-management', 
    // Ví dụ: 'http://localhost:5000/api/'
    // cấu hình thêm headers nếu cần
    headers: {
      'Content-Type': 'application/json',
      
     
    }
  });

  axiosInstance.interceptors.request.use(
    config => {
      // Giả sử bạn lưu token trong localStorage, đừng quên kiểm tra sự tồn tại của token trước
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token; // Thêm token vào headers
      }
      return config;
    },
    error => {
      Promise.reject(error);
    });
  

  export default axiosInstance;