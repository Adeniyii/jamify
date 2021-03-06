import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlaylist, ISong } from "./interfaces";

export interface PlayerState {
  activeSong: ISong;
  activePlaylist: IPlaylist;
  isPlaying: boolean;
}

const initialState: PlayerState = {
  activeSong: null,
  activePlaylist: null,
  isPlaying: false,
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    changeActiveSong: (state, action: PayloadAction<ISong>) => {
      state.activeSong = action.payload;
    },
    changeActivePlaylist: (state, action: PayloadAction<IPlaylist>) => {
      state.activePlaylist = action.payload;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActiveSong, changeActivePlaylist, togglePlay } =
  songSlice.actions;

export default songSlice.reducer;
