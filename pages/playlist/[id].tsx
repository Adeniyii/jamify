// import { Playlist } from "@prisma/client";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

type Props = {
  playlist: string;
};

const index: FC<Props> = ({ playlist }) => {
  return <div>Playlist {JSON.parse(playlist).name}</div>;
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
