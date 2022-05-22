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
      <div className={`flex items-end p-5 ${bg}`}>
        <div
          className={`p-5 w-[160px] h-[160px] object-contain shadow-xl shadow-gray-800 relative overflow-hidden ${
            rounded ? "rounded-full" : "rounded"
          }`}
        >
          <Image src={image} layout="fill" />
        </div>
        <div className="p-5 text-white">
          <p className="text-xs font-bold uppercase">{subTitle}</p>
          <p className="text-5xl font-bold capitalize">{title}</p>
          <p className="text-xs font-normal">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default GradientLayout;
