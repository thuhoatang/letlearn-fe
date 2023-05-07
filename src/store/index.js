import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduces/counterSlice";
import authReducer from "./reduces/auth";
import categoriesReduce from "./reduces/categories";
import spinnerReduce, { load, stop } from "./reduces/spinner";
import instance from "../service/httpReuest";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    categories: categoriesReduce,
    spinner: spinnerReduce,
  },
});
instance.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    const jwt = localStorage.getItem("access_token");
    config.headers.Authorization = "Bearer " + jwt;
    store.dispatch(load())
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (config) {
    store.dispatch(stop())

    return config;
  }, function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
)
export default store;
