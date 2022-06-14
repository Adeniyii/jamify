import {
  changeActiveSong,
  changeActivePlaylist,
  togglePlay,
} from "lib/activeSongSlice";
import { IPlaylist } from "lib/interfaces";
import { RootState } from "lib/store";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect, useRef, useState } from "react";
import ReactHowler from "react-howler";

export const useTableControls = (playlist) => {
  const { songs } = playlist;

  const dispatch = useDispatch();
  const activePlaylist = useSelector(
    (state: RootState) => state.song.activePlaylist,
    shallowEqual
  );

  const isPlaying = useSelector((state: RootState) => state.song.isPlaying);

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

export const usePlayerControls = () => {
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0.01);

  const dispatch = useDispatch();
  const soundRef = useRef<ReactHowler>();
  const animationRef = useRef<number>();
  const repeatRef = useRef(false);

  const activePlaylist = useSelector(
    (state: RootState) => state.song.activePlaylist,
    shallowEqual
  );

  const activeSong = useSelector(
    (state: RootState) => state.song.activeSong,
    shallowEqual
  );

  const isPlaying = useSelector((state: RootState) => state.song.isPlaying);

  const { songs } = activePlaylist;
  const [index, setIndex] = useState(() => {
    return songs.findIndex((song) => song.id === activeSong.id);
  });

  const setPlayState = (value: boolean) => {
    if (typeof value !== "boolean") return;
    dispatch(togglePlay());
  };

  const toggleShuffle = () => {
    setShuffle((prev) => !prev);
  };

  const toggleRepeat = () => {
    setRepeat((prev) => !prev);
  };

  const setPrevSong = () => {
    setIndex((i) => (i ? i - 1 : songs.length - 1));
  };

  const setNextSong = () => {
    if (shuffle) {
      const next = Math.floor(Math.random() * songs.length);
      setIndex((i) => (i === next ? next + 1 : next));
    } else {
      setIndex((i) => (i === songs.length - 1 ? 0 : i + 1));
    }
  };

  const onEnd = () => {
    if (repeatRef.current) {
      setSeek(soundRef.current.seek(0));
      return;
    }
    setNextSong();
  };

  const onLoad = () => {
    setDuration(soundRef.current.duration());
  };

  const onSeek = (values: number[]) => {
    setSeek(values[0]);
    soundRef.current.seek(values[0]);
  };

  // Handle updating UI seekbar
  useEffect(() => {
    const animate = () => {
      if (isPlaying) {
        setSeek(soundRef.current.seek());
        animationRef.current = requestAnimationFrame(animate);
      } else if (!isPlaying && animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPlaying]);

  useEffect(() => {
    dispatch(changeActiveSong(songs[index]));
  }, [dispatch, index, songs]);

  useEffect(() => {
    repeatRef.current = repeat;
  }, [repeat]);

  return {
    seek,
    index,
    onEnd,
    onLoad,
    onSeek,
    repeat,
    shuffle,
    soundRef,
    duration,
    isPlaying,
    setPrevSong,
    setNextSong,
    setPlayState,
    toggleRepeat,
    toggleShuffle,
  };
};
