import { configureStore } from "@reduxjs/toolkit";

import savedData from "./savedData/savedDataSlice";
import cart from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    savedData,
    cart,
  },
});
