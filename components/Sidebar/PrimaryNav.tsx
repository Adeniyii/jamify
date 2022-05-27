import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import ListItem from "./ListItem";

const PrimaryNav = () => {
  return (
    <ol className="flex flex-col">
      <ListItem
        href="/"
        label="Home"
        Icon={IoHomeOutline}
        iconStyle="stroke-gray-400"
      />
      <ListItem
        href="/search"
        label="Search"
        Icon={IoSearchOutline}
        iconStyle="stroke-gray-400"
      />
      <ListItem
        href="/library"
        label="Library"
        Icon={BiLibrary}
        iconStyle="fill-gray-400"
      />
    </ol>
  );
};

export default PrimaryNav;
