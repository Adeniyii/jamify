import { GetServerSideProps } from "next";
import React, { FC } from "react";
import GradientLayout from "components/GradientLayout";
import SongsTable from "components/SongsTable";
import { validateToken } from "lib/auth";
import prisma from "lib/prisma";

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
      <SongsTable songs={playlistObj.songs} />
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
        include: {
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
