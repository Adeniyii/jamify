// import { Playlist } from "@prisma/client";
import { Playlist } from "@prisma/client";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import GradientLayout from "../../components/GradientLayout";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const colors = ["140deg", "30deg", "200deg", "300deg", "250deg", "350deg"];

type Props = {
  playlist: string;
};

const index: FC<Props> = ({ playlist }) => {
  const playlistObj: Playlist = JSON.parse(playlist);
  return (
    <GradientLayout
      title={playlistObj.name}
      subTitle="playlist"
      image="/images/papi.jpg"
      desc="guantanamo"
      style={{
        "--page-color": `${colors[Math.floor(Math.random() * colors.length)]}`,
        "--page-color-saturation": "50%",
      }}
    >
      {playlistObj.name}
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
