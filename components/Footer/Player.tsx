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
import Slider from "./Slider";

interface IProps {
  activeSong: Song;
  activeSongs: Song[];
}

const Player: FC<IProps> = ({ activeSong }) => {
  const [playing, setPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const setPlayState = (value: boolean) => {
    if (typeof value !== "boolean") return;
    setPlaying(value);
  };
  const toggleShuffle = () => {
    setShuffle((prev) => !prev);
  };
  const toggleRepeat = () => {
    setRepeat((prev) => !prev);
  };

  return (
    <div className="w-[500px] h-full flex flex-col justify-between">
      <ReactHowler playing={playing} src={activeSong?.url} />
      <div className="flex items-center justify-center gap-4">
        <button type="button" className="mr-2" onClick={() => toggleShuffle()}>
          <MdShuffle
            className={`text-base ${
              shuffle ? "text-green-500 opacity-90" : "text-white opacity-60"
            } hover:opacity-100`}
          />
        </button>
        <button type="button">
          <MdSkipPrevious className="text-white opacity-60 text-xl hover:opacity-100" />
        </button>
        {playing ? (
          <button type="button" onClick={() => setPlayState(false)}>
            <MdOutlinePauseCircleFilled className="text-4xl hover:scale-110 transition-transform" />
          </button>
        ) : (
          <button type="button" onClick={() => setPlayState(true)}>
            <MdOutlinePlayCircleFilled className="text-4xl hover:scale-110 transition-transform" />
          </button>
        )}
        <button type="button">
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
        <Slider />
        <p className="text-xs">1:12</p>
      </div>
    </div>
  );
};

export default Player;
