import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: "",
  reducers: {
    setNote: (state, action) => {
      return action.payload;
    },
  },
});

export const { setNote } = noteSlice.actions;

export default noteSlice.reducer;
