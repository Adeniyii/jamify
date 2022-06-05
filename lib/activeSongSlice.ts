import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "@prisma/client";

export interface SongState {
  activeSong: Song;
  activeSongs: Song[];
  isPlaying: boolean;
}

const initialState: SongState = {
  activeSong: null,
  activeSongs: [],
  isPlaying: false,
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
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActiveSong, changeActiveSongs, togglePlay } =
  songSlice.actions;

export default songSlice.reducer;
