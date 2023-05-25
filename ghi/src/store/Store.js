import { configureStore } from "@reduxjs/toolkit";
// import { tripsApi } from './tripsApi';
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "./apiSlice";
import  parkSearchReducer from "./parkSearchSlice";


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    parkSearch: parkSearchReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
