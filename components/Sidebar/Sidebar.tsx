/* eslint-disable @next/next/no-html-link-for-pages */
import { RiSpotifyLine, RiAddBoxLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";

import ListItem from "./ListItem";
import PrimaryNav from "./PrimaryNav";

// const PlaylistColumn = () => {
//   return (

//   )
// }

const Sidebar = () => {
  return (
    <div className="p-5 pt-0 flex flex-col text-white">
      <span className="-mx-4 px-4 py-6 flex gap-2 items-center sticky top-0 bg-black">
        <RiSpotifyLine className="w-8 h-8" />
        <span className="text-xl font-semibold">Spotify</span>
      </span>
      <PrimaryNav />
      <ol className="flex flex-col gap-4 my-7">
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
          iconStyle="stroke-gray-400"
        />
        <ListItem
          href="/liked"
          label="Liked Songs"
          Icon={FcLike}
          iconStyle="stroke-gray-400"
        />
        <ListItem
          href="/liked"
          label="Liked Songs"
          Icon={FcLike}
          iconStyle="stroke-gray-400"
        />
        <ListItem
          href="/liked"
          label="Liked Songs"
          Icon={FcLike}
          iconStyle="stroke-gray-400"
        />
        <ListItem
          href="/liked"
          label="Liked Songs"
          Icon={FcLike}
          iconStyle="stroke-gray-400"
        />
        <ListItem
          href="/liked"
          label="Liked Songs"
          Icon={FcLike}
          iconStyle="stroke-gray-400"
        />
        <ListItem
          href="/liked"
          label="Liked Songs"
          Icon={FcLike}
          iconStyle="stroke-gray-400"
        />
        <ListItem
          href="/liked"
          label="Liked Songs"
          Icon={FcLike}
          iconStyle="stroke-gray-400"
        />
        <ListItem
          href="/liked"
          label="Liked Songs"
          Icon={FcLike}
          iconStyle="stroke-gray-400"
        />
        <ListItem
          href="/liked"
          label="Liked Songs"
          Icon={FcLike}
          iconStyle="stroke-gray-400"
        />
      </ol>
      <span className="w-full h-[1px] bg-gray-800" />
    </div>
  );
};

export default Sidebar;
