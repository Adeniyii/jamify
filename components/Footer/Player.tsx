import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import ReactHowler from "react-howler";
import { FC, useEffect, useRef, useState } from "react";
import { useStoreActions } from "easy-peasy";
import { Song } from "@prisma/client";
import Slider from "./Slider";

interface Iprops {
  activeSong: Song;
}

const Player: FC<Iprops> = ({ activeSong }) => {
  const [playing, setPlaying] = useState(true);

  const setPlayState = (value: boolean) => {
    if (typeof value !== "boolean") return;
    setPlaying(value);
  };

  return (
    <div className="w-[500px] h-full flex flex-col justify-between">
      {/* <ReactHowler playing={playing} src={activeSong?.url} /> */}
      <div className="flex items-center justify-center gap-4">
        <button type="button" className="mr-2">
          <MdShuffle className="text-neutral-700 text-sm" />
        </button>
        <button type="button">
          <MdSkipPrevious className="text-neutral-400 text-base" />
        </button>
        {playing ? (
          <button type="button" onClick={() => setPlayState(false)}>
            <MdOutlinePauseCircleFilled className="text-4xl" />
          </button>
        ) : (
          <button type="button" onClick={() => setPlayState(true)}>
            <MdOutlinePlayCircleFilled className="text-4xl" />
          </button>
        )}
        <button type="button">
          <MdSkipNext className="text-neutral-400 text-base" />
        </button>
        <button type="button" className="ml-2">
          <MdOutlineRepeat className="text-neutral-700 text-sm" />
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
