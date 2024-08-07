// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 基础URL
  timeout: 10000, // 请求超时时间
  headers: { 'Content-Type': 'application/json' }, // 默认请求头
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，比如加入token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response.data;
  },
  error => {
    // 对响应错误做些什么
    if (error.response) {
      // 服务器返回的错误
      console.error('Error Response:', error.response);
      // 可以根据状态码处理不同的错误，比如401未授权
    } else if (error.request) {
      // 请求已经发出，但是没有收到响应
      console.error('Error Request:', error.request);
    } else {
      // 其他错误
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
