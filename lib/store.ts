import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./activeSongSlice";
// import activeSongsReducer from "./activeSongs-Slice";

// import { createStore, action } from "easy-peasy";

// export const store = createStore({
//   activeSongs: [],
//   activeSong: null,
//   changeActiveSongs: action((state: any, payload) => {
//     state.activeSongs = payload;
//   }),
//   changeActiveSong: action((state: any, payload) => {
//     state.activeSong = payload;
//   }),
// });

// ...

export const store = configureStore({
  reducer: {
    song: songReducer,
    // activeSongs: activeSongsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
