import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import vaccineSlice from "./vaccineSlice";
import formIsLoadingSlice from "./formIsLoadingSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    vaccines: vaccineSlice,
    formIsLoading: formIsLoadingSlice,
  },
});
