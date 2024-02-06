import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("arrOfCartProducts")
      ? JSON.parse(localStorage.getItem("arrOfCartProducts"))
      : [],
  },
  reducers: {
    setCart(state, { payload }) {
      state.cart = payload;
      localStorage.setItem("arrOfCartProducts", JSON.stringify(state.cart));
      console.log("Updated Cart:", state.cart);
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
