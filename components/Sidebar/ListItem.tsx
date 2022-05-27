/* eslint-disable react/require-default-props */
import { IconType } from "react-icons";
import React, { FC } from "react";
import Link from "next/link";

type Props = {
  id?: number;
  label: string;
  Icon: IconType;
  iconStyle: string;
  href: string;
};

const ListItem: FC<Props> = ({ id, label, Icon, iconStyle, href }) => {
  return (
    <li className="px-4">
      <Link
        href={{
          pathname: href,
          query: id ? { id } : undefined,
        }}
        passHref
      >
        <a
          href="/home"
          className="flex py-2 gap-3 -mx-4 px-4 text-sm items-center hover:bg-neutral-800 rounded-sm"
        >
          <Icon className={iconStyle} />
          <span>{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default ListItem;
