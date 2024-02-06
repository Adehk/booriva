import { createSlice } from "@reduxjs/toolkit";

export const savedDataSlice = createSlice({
  name: "savedData",
  initialState: {
    savedData: localStorage.getItem("savedData")
      ? JSON.parse(localStorage.getItem("savedData"))
      : [],
  },
  reducers: {
    setSavedData(state, { payload }) {
      state.savedData = payload;
      localStorage.setItem("savedData", JSON.stringify(state.savedData));
    },
  },
});

export const { setSavedData } = savedDataSlice.actions;

export default savedDataSlice.reducer;
