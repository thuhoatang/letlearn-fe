import axios from "axios";

const getToken = () => {};
const instance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000,
  headers: { Authorization: "Bearer" },
});
export default instance;
