import { createStore, action, Action } from "easy-peasy";

interface IStore {
  activeSongs: string[];
  activeSong: string;
  changeActiveSongs: Action<IStore, string[]>;
  changeActiveSong: Action<IStore, string>;
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
