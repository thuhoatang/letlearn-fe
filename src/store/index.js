import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduces/counterSlice";
import authReducer from "./reduces/auth";
import categoriesReduce from "./reduces/categories";
export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    categories: categoriesReduce,
  },
});
