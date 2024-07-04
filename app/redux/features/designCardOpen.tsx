import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const designCardOpen = createSlice({
  initialState,
  name: "design",
  reducers: {
    open: (state) => true,
    close: (state) => false,
  },
});

export const { open, close } = designCardOpen.actions;

export default designCardOpen.reducer;
