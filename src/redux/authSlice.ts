import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";

const initialValues: Partial<User> = {
  id: "",
  name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialValues,
  reducers: {
    reducerSetLogin: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { reducerSetLogin } = authSlice.actions;

export default authSlice.reducer;
