import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import ReactHowler from "react-howler";
import { useEffect, useRef, useState } from "react";
import { useStoreActions } from "easy-peasy";

const Player = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <MdShuffle className="text-neutral-700 text-sm" />
        <MdSkipPrevious className="text-neutral-400 text-base" />
        <MdOutlinePlayCircleFilled className="text-4xl" />
        {/* <MdOutlinePauseCircleFilled className="text-4xl" /> */}
        <MdSkipNext className="text-neutral-400 text-base" />
        <MdOutlineRepeat className="text-neutral-700 text-sm" />
      </div>
    </div>
  );
};

export default Player;
