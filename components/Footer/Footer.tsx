import { useStoreState } from "easy-peasy";
import React, { useState } from "react";
import Player from "./Player";

const Footer = () => {
  const activeSong = useStoreState((store: any) => store.activeSong);
  const activeSongs = useStoreState((store: any) => store.activeSongs);
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
};

export default Footer;
