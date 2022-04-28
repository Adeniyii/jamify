import { IconType } from "react-icons";
import React, { FC } from "react";
import Link from "next/link";

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
          className="flex py-2 gap-3 text-sm items-center -mx-4 px-4 hover:bg-gray-800 rounded-sm"
        >
          <Icon className={iconStyle} />
          <span>{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default ListItem;
