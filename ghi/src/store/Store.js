import { configureStore } from "@reduxjs/toolkit";
// import { tripsApi } from './tripsApi';
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "./apiSlice";
import parkSearchReducer from "./parkSearchSlice";
import { alertSlice } from "./alertSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    parkSearch: parkSearchReducer,
    [alertSlice.reducerPath]: alertSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware, alertSlice.middleware]),
});

setupListeners(store.dispatch);
