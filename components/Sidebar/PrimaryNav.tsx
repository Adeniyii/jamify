import Link from "next/link";
import React, { FC } from "react";
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { IconType } from "react-icons";

type Props = {
  href: string;
  label: string;
  Icon: IconType;
  iconStyle: string;
};

const ListItem: FC<Props> = ({
  href,
  label,
  Icon,
  iconStyle,
  ...delegated
}) => {
  return (
    <li {...delegated}>
      <Link href={href} passHref>
        <a
          href="/home"
          className="flex py-1 gap-3 text-sm items-center -mx-4 px-4 hover:bg-gray-600 rounded-sm"
        >
          <Icon className={iconStyle} />
          <span>{label}</span>
        </a>
      </Link>
    </li>
  );
};

const PrimaryNav = () => {
  return (
    <ol className="flex flex-col gap-4 mb-5">
      <ListItem
        href="/home"
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
