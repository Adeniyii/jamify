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
    <li className="px-4" {...delegated}>
      <Link href={href} passHref>
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
