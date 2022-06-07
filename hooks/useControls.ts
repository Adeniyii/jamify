import {
  changeActiveSong,
  changeActivePlaylist,
  togglePlay,
} from "lib/activeSongSlice";
import { IPlaylist } from "lib/interfaces";
import { RootState } from "lib/store";
import { useDispatch, useSelector } from "react-redux";

const useControls = (playlist) => {
  const { songs } = playlist;

  const dispatch = useDispatch();
  const { isPlaying, activePlaylist } = useSelector(
    (state: RootState) => state.song
  );

  const isCurrentPlaylist = (activePl: IPlaylist, newPl: IPlaylist) => {
    return activePl?.id === newPl.id;
  };

  const handlePause = () => {
    dispatch(togglePlay());
  };

  const handlePlay = (song?) => {
    dispatch(changeActiveSong(song || songs[0]));
    if (!isCurrentPlaylist(activePlaylist, playlist))
      dispatch(changeActivePlaylist(playlist));
    if (!isPlaying) dispatch(togglePlay());
  };

  return {
    handlePlay,
    handlePause,
    isCurrentPlaylist,
    isPlaying,
    activePlaylist,
  };
};

export default useControls;
