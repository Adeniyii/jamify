import { useSelector } from "react-redux";
import React, { useState } from "react";
import { RootState } from "lib/store";
import Player from "./Player";

const Footer = () => {
  const { activeSong } = useSelector((store: RootState) => store.song);
  const { activeSongs } = useSelector((store: RootState) => store.song);
  // const activeSongs = useSelector((store: RootState) => store.activeSongs);
  const [dum, setDum] = useState(0);

  return (
    <div className="flex items-center h-full">
      <div className="grow">song info</div>
      <button type="button" onClick={() => setDum((p) => p + 1)}>
        {dum}
      </button>
      {activeSong && (
        <Player activeSong={activeSong} activeSongs={activeSongs} />
      )}
      <div className="grow flex justify-end">misc</div>
    </div>
  );
};;

export default Footer;
