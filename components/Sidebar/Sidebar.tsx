/* eslint-disable @next/next/no-html-link-for-pages */
import { RiSpotifyLine, RiAddBoxLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import ListItem from "./ListItem";
import PrimaryNav from "./PrimaryNav";
import PlaylistColumn from "./PlaylistColumn";

const Sidebar = () => {
  return (
    <div className="h-full pt-7 flex flex-col">
      <span className="flex gap-2 items-center px-4 mb-7">
        <RiSpotifyLine className="w-8 h-8" />
        <span className="text-xl font-semibold">Spotify</span>
      </span>
      <PrimaryNav />
      <ol className="flex flex-col gap-1 my-3">
        <ListItem
          href="/create"
          label="Create Playlist"
          Icon={RiAddBoxLine}
          iconStyle="stroke-green-400"
        />
        <ListItem
          href="/liked"
          label="Liked Songs"
          Icon={FcLike}
          iconStyle="stroke-neutral-300"
        />
      </ol>
      <span className="w-full h-[1px] bg-neutral-800" />
      <div className="h-full">
        <PlaylistColumn />
      </div>
    </div>
  );
};

export default Sidebar;
