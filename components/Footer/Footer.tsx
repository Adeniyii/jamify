import { shallowEqual, useSelector } from "react-redux";
import React from "react";
import { RootState } from "lib/store";
import Player from "./Player";

const Footer = () => {
  const activeSong = useSelector(
    (store: RootState) => store.song.activeSong,
    shallowEqual
  );

  return (
    <div className="flex items-center h-full">
      {activeSong && (
        <>
          <div className="grow">song info</div>
          <Player activeSong={activeSong} />
          <div className="grow flex justify-end">misc</div>
        </>
      )}
    </div>
  );
};

export default Footer;
