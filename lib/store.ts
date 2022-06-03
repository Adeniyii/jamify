import { Song } from "@prisma/client";
import { createStore, action, Action, createTypedHooks } from "easy-peasy";

interface IStore {
  activeSongs: Song[];
  activeSong: Song;
  changeActiveSongs: Action<IStore, Song[]>;
  changeActiveSong: Action<IStore, Song>;
}

export const store = createStore<IStore>({
  activeSongs: [],
  activeSong: null,
  changeActiveSongs: action((state, payload) => {
    state.activeSongs = payload;
  }),
  changeActiveSong: action((state, payload) => {
    state.activeSong = payload;
  }),
});

const typedHooks = createTypedHooks<IStore>();

export const { useStoreActions } = typedHooks;
export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;
