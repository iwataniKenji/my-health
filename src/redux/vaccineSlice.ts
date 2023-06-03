import { createSlice } from "@reduxjs/toolkit";
import { Vaccine } from "../types/Vaccine";

const initialValues: Vaccine[] = [];

export const vaccineSlice = createSlice({
  name: "vaccine",
  initialState: initialValues,
  reducers: {
    reducerSetVaccineList: (state, action) => {
      return action.payload;
    },
  },
});

export const { reducerSetVaccineList } = vaccineSlice.actions;

export default vaccineSlice.reducer;
