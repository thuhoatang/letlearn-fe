import axios from "axios";
// import * as store from "../store";
import load from "../store/reduces/spinner";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 30000,
  headers: { Authorization: "Bearer" },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response.status);
    if (error.response.status == 401)
      window.location.href = "http://localhost:3000/account/sign-in";

    return Promise.reject(error);
  }
);

export default instance;
