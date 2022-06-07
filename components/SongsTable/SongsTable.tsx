/* eslint-disable react/require-default-props */
import React, { FC } from "react";
import { Song } from "@prisma/client";
import {
  BsClock,
  BsFillHeartFill,
  BsFillPlayFill,
  BsFillPauseFill,
} from "react-icons/bs";
import { formatDate, formatTime } from "lib/formatters";
import { IPlaylist } from "lib/interfaces";
import useControls from "hooks/useControls";

interface IProps {
  playlist: IPlaylist;
}

const SongsTable: FC<IProps> = ({ playlist }) => {
  const { songs } = playlist;

  const {
    activePlaylist,
    isPlaying,
    isCurrentPlaylist,
    handlePause,
    handlePlay,
  } = useControls(playlist);

  return (
    <>
      <div className="mb-5 flex items-center gap-8">
        {isPlaying && isCurrentPlaylist(activePlaylist, playlist) ? (
          <button type="button" className="" onClick={() => handlePause()}>
            <BsFillPauseFill className="bg-green-600 w-12 h-12 p-2 rounded-[100%] text-neutral-900" />
          </button>
        ) : (
          <button type="button" className="" onClick={() => handlePlay()}>
            <BsFillPlayFill className="bg-green-600 w-12 h-12 p-2 rounded-[100%] text-neutral-900" />
          </button>
        )}

        <button type="button" className="">
          <BsFillHeartFill className="text-green-600 w-6 h-6" />
        </button>
      </div>
      <table className="w-full text-xs text-neutral-500">
        <thead className="border-b-[.5px] [border-color:_hsla(var(--page-color),_0%,_40%,_0.3)] uppercase">
          <tr>
            <th className="py-5">#</th>
            <th>Title</th>
            <th>Date Added</th>
            <th>
              <BsClock className="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song: Song, i: number) => {
            return (
              <tr
                key={song.id}
                className="hover:[background:_rgba(255,_255,_255,_0.1)] hover:cursor-pointer"
                onClick={() => handlePlay(song)}
              >
                <td className="py-5">{i + 1}</td>
                <td>{song.name}</td>
                <td>{formatDate(new Date(song.createdAt))}</td>
                <td>{formatTime(song.duration)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SongsTable;
