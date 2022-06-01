import React from "react";
import Player from "./Player";

const Footer = () => {
  return (
    <div className="flex items-center h-full">
      <div className="grow">song info</div>
      <div className="w-[350px]">
        <Player />
      </div>
      <div className="grow flex justify-end">misc</div>
    </div>
  );
};

export default Footer;
