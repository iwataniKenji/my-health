import { createSlice } from "@reduxjs/toolkit";

const initialValues: boolean = false;

export const formIsLoadingSlice = createSlice({
  name: "formIsLoading",
  initialState: initialValues,
  reducers: {
    reducerSetFormIsLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const { reducerSetFormIsLoading } = formIsLoadingSlice.actions;

export default formIsLoadingSlice.reducer;
