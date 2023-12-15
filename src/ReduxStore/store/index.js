import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../actions/productApi";
import basketSlice from "../slice/basketSlice";

export const store = configureStore({
  reducer: { basketSlice, [productApi.reducerPath]: productApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
