import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "@redux/Note/noteSlice";
import autoSaveReducer from "@redux/Note/autoSaveSlice";

const store = configureStore({
  reducer: {
    note: noteReducer,
    autoSave: autoSaveReducer,
  },
});

export default store;
