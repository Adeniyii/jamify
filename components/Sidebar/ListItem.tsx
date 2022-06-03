/* eslint-disable react/require-default-props */
import { IconType } from "react-icons";
import React, { FC } from "react";
import Link from "next/link";

type Props = {
  id?: number;
  label: string;
  Icon?: IconType;
  iconStyle?: string;
  href: string;
};

const ListItem: FC<Props> = ({ id, label, Icon, iconStyle, href }) => {
  return (
    <li className="px-4 text-semibold">
      <Link
        href={{
          pathname: href,
          query: id ? { id } : undefined,
        }}
        passHref
      >
        <a
          href="/home"
          className="flex py-2 gap-3 -mx-4 px-4 items-center hover:bg-neutral-800 rounded-sm"
        >
          {Icon && <Icon className={`h-6 w-6 ${iconStyle}`} />}
          <span className="font-semibold text-xs text-neutral-300">
            {label}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default ListItem;
