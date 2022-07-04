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
        iconStyle="stroke-neutral-300"
      />
      <ListItem
        href="/"
        label="Search"
        Icon={IoSearchOutline}
        iconStyle="stroke-neutral-300"
      />
      <ListItem
        href="/"
        label="Your Library"
        Icon={BiLibrary}
        iconStyle="fill-neutral-300"
      />
    </ol>
  );
};

export default PrimaryNav;
