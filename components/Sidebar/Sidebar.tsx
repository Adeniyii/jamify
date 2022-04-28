/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
// import Image from "next/image";
import { RiSpotifyLine } from "react-icons/ri";
import PrimaryNav from "./PrimaryNav";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 h-full p-5 flex flex-col text-white">
      <Link href="/" passHref>
        <a href="/" className="mb-6 flex gap-2 items-center w-fit">
          {/* <Image src="/icons/spotify.svg" width="40px" height="40px" className="" /> */}
          <RiSpotifyLine className="w-8 h-8" />
          <span className="text-xl font-semibold">Spotify</span>
        </a>
      </Link>
      <PrimaryNav />
      <span className="w-full h-[1px] bg-gray-800" />
    </div>
  );
};

export default Sidebar;
