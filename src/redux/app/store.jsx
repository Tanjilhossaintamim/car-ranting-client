import { configureStore } from "@reduxjs/toolkit";
import api from "../features/api/api";
import authenicationSlice from "../features/authenication/authenicationSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authenicationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
