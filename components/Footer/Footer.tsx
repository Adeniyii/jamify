import { shallowEqual, useSelector } from "react-redux";
import React from "react";
import { RootState } from "lib/store";
import { ISong } from "lib/interfaces";
import Player from "./Player";

const Footer = () => {
  const activeSong: ISong = useSelector(
    (store: RootState) => store.song.activeSong,
    shallowEqual
  );

  return (
    <div className="flex items-center h-full">
      {activeSong && (
        <>
          <div className="grow relative flex items-center">
            <div className="flex flex-col absolute">
              <h3 className="text-sm font-semibold">{activeSong.name}</h3>
              <span className="text-xs font-semibold text-neutral-500">
                {activeSong.artist.name}
              </span>
            </div>
          </div>
          <Player activeSong={activeSong} />
          <div className="grow flex justify-end">misc</div>
        </>
      )}
    </div>
  );
};

export default Footer;
