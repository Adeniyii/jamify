import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "@prisma/client";

export interface SongState {
  activeSong: Song;
  activeSongs: Song[];
}

const initialState: SongState = {
  activeSong: null,
  activeSongs: [],
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    changeActiveSong: (state, action: PayloadAction<Song>) => {
      state.activeSong = action.payload;
    },
    changeActiveSongs: (state, action: PayloadAction<Song[]>) => {
      state.activeSongs = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActiveSong, changeActiveSongs } = songSlice.actions;

export default songSlice.reducer;
