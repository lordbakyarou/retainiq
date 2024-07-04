import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const filterCardOpen = createSlice({
  initialState,
  name: "filter",
  reducers: {
    open: (state) => true,
    close: (state) => false,
  },
});

export const { open, close } = filterCardOpen.actions;

export default filterCardOpen.reducer;
