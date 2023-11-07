import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "@redux/Note/noteSlice";

const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

export default store;
