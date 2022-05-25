import Head from "next/head";
import ArtistSection from "../components/ArtistSection";
import GradientLayout from "../components/GradientLayout";
import { useMe, usePlaylist } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const artistObj = JSON.parse(artists);
  const { user } = useMe();
  const { data } = usePlaylist();

  return (
    <GradientLayout
      title={`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}
      subTitle="profile"
      image="/images/papi.jpg"
      desc={`${data?.playlists?.length ?? "-"} public playlists`}
      bg="[background-image:linear-gradient(hsl(0deg,_0%,_30%),_hsl(0deg,_0%,_15%))]"
      gradient="[background-image:linear-gradient(hsl(0deg,_0%,_13%),_hsl(0deg,_0%,_11%)_40%,_hsl(0deg,_0%,_5%),_hsl(0deg,_0%,_.95%)_75%)]"
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
