import { createSlice } from "@reduxjs/toolkit";
import cartService from "../../service/cart";

export const myCorusesSlice = createSlice({
  name: "myCourse",
  initialState: {
    courses: [],
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { setCourses } = myCorusesSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// get .me
export const updateMyCourse = () => (dispatch) => {
  cartService.getMycourses().then((data) => dispatch(setCourses(data)));
  // auth.getMe().then((response) => {
  //   dispatch(login(response.data));
  // });
  //   setTimeout(() => {
  //     dispatch(incrementByAmount(amount));
  //   }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMyCourse = (state) => state.myCourse.courses;

export default myCorusesSlice.reducer;
