import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import vaccineSlice from "./vaccineSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    vaccines: vaccineSlice,
  },
});
