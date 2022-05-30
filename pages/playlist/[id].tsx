// import { Playlist } from "@prisma/client";
import { Song } from "@prisma/client";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { BsFillHeartFill, BsFillPlayFill, BsClock } from "react-icons/bs";
import GradientLayout from "../../components/GradientLayout";
import { validateToken } from "../../lib/auth";
import { formatDate, formatTime } from "../../lib/formatters";
import prisma from "../../lib/prisma";

const colors = [
  "140deg",
  "30deg",
  "200deg",
  "300deg",
  "250deg",
  "350deg",
  "80deg",
  "180deg",
  "120deg",
  "280deg",
];

type Props = {
  playlist: string;
};

const index: FC<Props> = ({ playlist }) => {
  const playlistObj = JSON.parse(playlist);

  return (
    <GradientLayout
      title={playlistObj.name}
      subTitle="playlist"
      image={`https://picsum.photos/400?random=${playlistObj.id}`}
      desc={
        playlistObj.songs.length > 1
          ? `${playlistObj.songs.length} songs`
          : `${playlistObj.songs.length} song`
      }
      style={{
        "--page-color": `${colors[Math.floor(Math.random() * colors.length)]}`,
        "--page-color-saturation": "50%",
      }}
    >
      <div>
        <div className="mb-5 flex items-center gap-8">
          <button type="button" className="">
            <BsFillPlayFill className="bg-green-600 w-12 h-12 p-2 rounded-[100%]" />
          </button>
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
            {playlistObj.songs.map((song: Song, i: number) => {
              return (
                <tr
                  key={song.id}
                  className="hover:[background:_rgba(255,_255,_255,_0.1)] hover:cursor-pointer"
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
      </div>
    </GradientLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params: { id },
  req,
}) => {
  let userId;

  try {
    userId = validateToken(req.cookies.SPOTIFY_ACCESS_TOKEN);
  } catch (e) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const playlist = await prisma.playlist.findFirst({
    where: {
      id: +id,
      userId,
    },
    include: {
      songs: {
        select: {
          name: true,
          duration: true,
          createdAt: true,
          artist: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return {
    props: {
      playlist: JSON.stringify(playlist),
    },
  };
};

export default index;
