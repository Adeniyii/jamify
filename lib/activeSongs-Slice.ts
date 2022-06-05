import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "@prisma/client";

export interface ActiveSongsState {
  activeSongs: Song[];
}

const initialState: ActiveSongsState = {
  activeSongs: [],
};

export const activeSongsSlice = createSlice({
  name: "activeSongs",
  initialState,
  reducers: {
    changeActiveSongs: (state, action: PayloadAction<Song[]>) => {
      state.activeSongs = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActiveSongs } = activeSongsSlice.actions;

export default activeSongsSlice.reducer;
