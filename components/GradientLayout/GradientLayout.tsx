/* eslint-disable react/require-default-props */
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  desc: string;
  title: string;
  image: string;
  subTitle: string;
  rounded?: boolean;
  style?: {};
};

const GradientLayout: FC<Props> = ({
  desc,
  title,
  image,
  rounded,
  subTitle,
  children,
  style,
}) => {
  return (
    <div className="h-full page-gradient" style={style}>
      <div className="p-5 page-solid overflow-hidden shadow-sm">
        <div className="flex items-end [filter:_drop-shadow(4px_-8px_24px_hsl(0deg_0%_0%_/_.6))]">
          <div
            className={`p-5 w-[160px] h-[160px] object-contain relative overflow-hidden ${
              rounded ? "rounded-full" : "rounded"
            }`}
          >
            <Image src={image} layout="fill" />
          </div>
          <div className="p-5 text-white">
            <p className="text-[0.6rem] font-medium uppercase">{subTitle}</p>
            <p className="text-6xl font-bold capitalize mt-1">{title}</p>
            <p className="text-xs text-neutral-400 font-normal mt-2">{desc}</p>
          </div>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default GradientLayout;
