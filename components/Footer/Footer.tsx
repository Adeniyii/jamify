import React from "react";
import Player from "./Player";

const Footer = () => {
  return (
    <div className="flex items-center h-full">
      <div className="grow">song info</div>
      <Player />
      <div className="grow flex justify-end">misc</div>
    </div>
  );
};

export default Footer;
