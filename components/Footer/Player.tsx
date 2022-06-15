import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import ReactHowler from "react-howler";
import { FC } from "react";

import { formatTime } from "lib/formatters";
import { usePlayerControls } from "hooks/useControls";
import { ISong } from "lib/interfaces";
import Slider from "./Slider";

interface IProps {
  activeSong: ISong;
}

const Player: FC<IProps> = ({ activeSong }) => {
  const {
    seek,
    onEnd,
    onLoad,
    onSeek,
    shuffle,
    repeat,
    duration,
    isPlaying,
    soundRef,
    setPrevSong,
    setNextSong,
    setPlayState,
    toggleShuffle,
    toggleRepeat,
  } = usePlayerControls();

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
        <p className="text-xs">{formatTime(seek)}</p>
        <Slider max={duration ?? 0.01} onSeek={onSeek} seek={seek} />
        <p className="text-xs">{formatTime(duration)}</p>
      </div>
    </div>
  );
};

export default Player;
