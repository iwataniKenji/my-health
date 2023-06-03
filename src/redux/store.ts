import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import vaccineSlice from "./vaccineSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    vaccines: vaccineSlice,
  },
});
