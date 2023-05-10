import { createSlice } from "@reduxjs/toolkit";
import cartService from "../../service/cart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    status: false,
    items: [],
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setStatus, setCartItems } = cartSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// get .me
export const updateCarts = () => (dispatch) => {
  cartService.get().then((data) => dispatch(setCartItems(data)));
  // auth.getMe().then((response) => {
  //   dispatch(login(response.data));
  // });
  //   setTimeout(() => {
  //     dispatch(incrementByAmount(amount));
  //   }, 1000);
};

export const deleteCart = (courseId) => (dispatch) => {
  cartService.delete(courseId).then(() => {
    cartService.get().then((data) => dispatch(setCartItems(data)));
  });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
