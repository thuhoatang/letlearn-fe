import { createSlice } from "@reduxjs/toolkit";
import auth from "../../service/auth";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("access_token");
      // state.user = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// get .me
export const getProfile = () => (dispatch) => {
  auth.getMe().then((response) => {
    dispatch(login(response.data));
  });
  //   setTimeout(() => {
  //     dispatch(incrementByAmount(amount));
  //   }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
