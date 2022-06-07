import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import ReactHowler from "react-howler";
import { useEffect, useRef, useState, FC } from "react";
import { Song } from "@prisma/client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "lib/store";
import { togglePlay } from "lib/activeSongSlice";
import { formatTime } from "lib/formatters";
import Slider from "./Slider";

interface IProps {
  activeSong: Song;
}

const Player: FC<IProps> = ({ activeSong }) => {
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0.01);

  const soundRef = useRef<ReactHowler>();

  const dispatch = useDispatch();
  const { isPlaying, activePlaylist } = useSelector(
    (state: RootState) => state.song
  );

  const { songs } = activePlaylist;

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
      setIndex((i) => (i === next ? (next + 1) % songs.length : next));
    } else {
      setIndex((i) => (i === songs.length - 1 ? 0 : i + 1));
    }
  };

  const onEnd = () => {
    if (repeat) {
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

  return (
    <div className="w-[500px] h-full flex flex-col justify-between">
      <ReactHowler
        playing={isPlaying}
        src={activeSong?.url}
        ref={soundRef}
        onEnd={onEnd}
        onLoad={onLoad}
      />
      <div className="flex items-center justify-center gap-4">
        <button type="button" className="mr-2" onClick={() => toggleShuffle()}>
          <MdShuffle
            className={`text-base ${
              shuffle ? "text-green-500 opacity-90" : "text-white opacity-60"
            } hover:opacity-100`}
          />
        </button>
        <button type="button" onClick={() => setPrevSong()}>
          <MdSkipPrevious className="text-white opacity-60 text-xl hover:opacity-100" />
        </button>
        {isPlaying ? (
          <button type="button" onClick={() => setPlayState(false)}>
            <MdOutlinePauseCircleFilled className="text-4xl hover:scale-110 transition-transform" />
          </button>
        ) : (
          <button type="button" onClick={() => setPlayState(true)}>
            <MdOutlinePlayCircleFilled className="text-4xl hover:scale-110 transition-transform" />
          </button>
        )}
        <button type="button" onClick={() => setNextSong()}>
          <MdSkipNext className="text-white opacity-60 text-xl hover:opacity-100" />
        </button>
        <button type="button" className="ml-2" onClick={() => toggleRepeat()}>
          <MdOutlineRepeat
            className={`text-base ${
              repeat ? "text-green-500 opacity-90" : "text-white opacity-60"
            } hover:opacity-100`}
          />
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-xs">1:12</p>
        <Slider max={duration ?? 0.01} onSeek={onSeek} seek={seek} />
        <p className="text-xs">{formatTime(duration)}</p>
      </div>
    </div>
  );
};

export default Player;
