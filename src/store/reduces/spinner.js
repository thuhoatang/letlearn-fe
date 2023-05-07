import { createSlice } from "@reduxjs/toolkit";
 
export const spinnerSlice = createSlice({
  name: "spinner",
  initialState: {
    spinner: false,
  },
  reducers: {
    load: (state) => {
      state.spinner = true;
    },
    stop: (state) => {
      state.spinner = false;
    },
  },
});

export const { load, stop } = spinnerSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// get .me
// export const getProfile = () => (dispatch) => {
//   auth.getMe().then((response) => {
//     dispatch(login(response.data));
//   });
//   //   setTimeout(() => {
//   //     dispatch(incrementByAmount(amount));
//   //   }, 1000);
// };

export const setLoading = () => (dispatch) => {
  dispatch(load());
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSpinner = (state) => state.spinner.spinner;

export default spinnerSlice.reducer;
