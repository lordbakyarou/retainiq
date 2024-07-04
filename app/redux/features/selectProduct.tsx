import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  variantId: "",
  productId: "",
};

const selectProduct = createSlice({
  initialState,
  name: "product",
  reducers: {
    setProductId: (state, action) => action.payload,
    removeProductId: (state, action) => action.payload,
  },
});

export const { setProductId, removeProductId } = selectProduct.actions;

export default selectProduct.reducer;
