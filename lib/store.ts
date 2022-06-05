import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./activeSongSlice";

export const store = configureStore({
  reducer: {
    song: songReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
