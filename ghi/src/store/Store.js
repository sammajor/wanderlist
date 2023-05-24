import { configureStore } from "@reduxjs/toolkit";
// import { tripsApi } from './tripsApi';
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
