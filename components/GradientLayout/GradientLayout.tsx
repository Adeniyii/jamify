import Image from "next/image";
import React, { FC } from "react";

type Props = {
  desc: string;
  title: string;
  image: string;
  subTitle: string;
  rounded: boolean;
  gradient: string;
  bg: string;
};

const GradientLayout: FC<Props> = ({
  desc,
  title,
  image,
  rounded,
  subTitle,
  children,
  bg,
  gradient,
}) => {
  return (
    <div className={`h-full ${gradient}`}>
      <div className={` p-5 ${bg} overflow-hidden shadow-sm`}>
        <div className="flex items-end [filter:_drop-shadow(4px_8px_16px_hsl(0deg_0%_0%_/_.6))]">
          <div
            className={`p-5 w-[160px] h-[160px] object-contain relative overflow-hidden ${
              rounded ? "rounded-full" : "rounded"
            }`}
          >
            <Image src={image} layout="fill" />
          </div>
          <div className="p-5 text-white">
            <p className="text-[0.6rem] font-medium uppercase">{subTitle}</p>
            <p className="text-5xl font-bold capitalize mt-1">{title}</p>
            <p className="text-xs text-gray-400 font-normal mt-2">{desc}</p>
          </div>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default GradientLayout;
