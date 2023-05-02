import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000,
  headers: { Authorization: "Bearer" },
});

instance.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    const jwt = localStorage.getItem("access_token");
    config.headers.Authorization = "Bearer " + jwt;
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);
export default instance;
