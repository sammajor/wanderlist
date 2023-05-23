import { configureStore } from '@reduxjs/toolkit'
import { tripsApi } from './tripsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';


export const store = configureStore({
  reducer: {
    [tripsApi.reducerPath]: tripsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tripsApi.middleware),
});

setupListeners(store.dispatch);
