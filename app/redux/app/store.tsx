"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products";
import selectProductReducer from "../features/selectProduct";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { useDispatch } from "react-redux";
import designCardOpenReducer from "../features/designCardOpen";
import filterCardReducer from "../features/filterCardOpen";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  product: productsReducer,
  design: designCardOpenReducer,
  select: selectProductReducer,
  filter: filterCardReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
