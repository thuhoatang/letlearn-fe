import { createSlice } from "@reduxjs/toolkit";
import auth from "../../service/auth";
import categoryService from "../../service/categories";

export const categorieSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {
    add: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { add } = categorieSlice.actions;
export const getAllCategories = () => (dispatch) => {
  categoryService.getAll().then((response) => {
    dispatch(add(response.data));
  });
  //   setTimeout(() => {
  //     dispatch(incrementByAmount(amount));
  //   }, 1000);
};
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCategoies = (state) => state.categories.categories;

export default categorieSlice.reducer;
