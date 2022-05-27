// import { Playlist } from "@prisma/client";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import GradientLayout from "../../components/GradientLayout";
import { validateToken } from "../../lib/auth";
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
        <span className="text-white">
          <BsFillPlayFill className="bg-green-600 w-10 h-10 p-2 rounded-[100%]" />
        </span>
        <table className="w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date Added</th>
            </tr>
          </thead>
        </table>
      </div>
    </GradientLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params: { id },
  req,
}) => {
  const userId = validateToken(req.cookies.SPOTIFY_ACCESS_TOKEN);
  const playlistId = +id;

  const playlist = await prisma.playlist.findFirst({
    where: {
      id: playlistId,
      userId,
    },
    include: {
      songs: {
        select: {
          name: true,
          duration: true,
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
