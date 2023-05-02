import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduces/counterSlice";
import authReducer from "./reduces/auth";
export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
