import Head from "next/head";
import ArtistSection from "../components/ArtistSection";
import GradientLayout from "../components/GradientLayout";
import { useMe, usePlaylist } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const artistObj = JSON.parse(artists);
  const { data } = usePlaylist();
  const { user } = useMe();

  return (
    <GradientLayout
      title={`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}
      subTitle="profile"
      image="/images/papi.jpg"
      desc={`${data?.playlists?.length ?? "-"} public playlists`}
      rounded
    >
      <Head>
        <title>Spotify - profile</title>
        <meta name="spotify clone" content="Built by ifedayo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArtistSection artists={artistObj} />
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists: JSON.stringify(artists) },
  };
};

export default Home;
