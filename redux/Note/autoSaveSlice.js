import { createSlice } from "@reduxjs/toolkit";

const autoSaveSlice = createSlice({
  name: "autoSave",
  initialState: {
    value: false,
  },
  reducers: {
    setAutoSave: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAutoSave } = autoSaveSlice.actions;
export default autoSaveSlice.reducer;
