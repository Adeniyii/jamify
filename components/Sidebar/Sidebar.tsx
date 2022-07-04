/* eslint-disable @next/next/no-html-link-for-pages */
import { RiAddBoxFill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { GiDolmen } from "react-icons/gi";
import ListItem from "./ListItem";
import PrimaryNav from "./PrimaryNav";
import PlaylistColumn from "./PlaylistColumn";

const Sidebar = () => {
  return (
    <div className="h-full pt-7 flex flex-col">
      <span className="flex gap-2 items-center px-4 mb-7">
        <GiDolmen className="w-8 h-8" />
        <span className="text-lg font-semibold">Jamify</span>
      </span>
      <PrimaryNav />
      <ol className="flex flex-col gap-1 my-3">
        <ListItem
          href="/"
          label="Create Playlist"
          Icon={RiAddBoxFill}
          iconStyle="fill-green-700"
        />
        <ListItem
          href="/"
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
