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
    <div
      className="h-full page-gradient text-white overflow-y-auto"
      style={style}
    >
      <div className="h-5">
        <div className="p-6 page-solid overflow-hidden">
          <div className="flex items-end [filter:_drop-shadow(4px_-8px_24px_hsl(0deg_0%_0%_/_.6))]">
            <div
              className={`px-6 w-[180px] h-[180px] object-contain relative overflow-hidden ${
                rounded ? "rounded-full" : "rounded"
              }`}
            >
              <Image src={image} layout="fill" />
            </div>
            <div className="px-5">
              <p className="text-[0.6rem] tracking-widest font-medium uppercase">
                {subTitle}
              </p>
              <p className="text-6xl font-bold capitalize mt-1">{title}</p>
              <p className="text-xs text-neutral-400 font-normal mt-2">
                {desc}
              </p>
            </div>
          </div>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default GradientLayout;
