import { Artist } from "@prisma/client";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  artists: Artist[];
};

const ArtistSection: FC<Props> = ({ artists }) => {
  return (
    <div className="text-white">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-lg">Top artists this month</p>
          <p className="text-xs text-neutral-400">Only visible to you</p>
        </div>
        <p>see all</p>
      </div>
      <ul className="flex gap-4 mt-8">
        {artists.map((artist) => {
          return (
            <li className="bg-[hsl(0deg,_0%,_8%)] p-4 rounded" key={artist.id}>
              <div className="p-5 h-[100px] w-[100px] object-contain relative overflow-hidden rounded-[100%]">
                <Image src="/images/papi.jpg" layout="fill" />
              </div>
              <p className="text-sm font-semibold mt-3">{artist.name}</p>
              <p className="text-xs text-gray-400 mt-1">Artist</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArtistSection;
