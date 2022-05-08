import React, { FC } from "react";

type Props = {
  color: string;
  title: string;
  subTitle: string;
  image: string;
  desc: string;
  rounded: boolean;
};

const GradientLayout: FC<Props> = ({
  children,
  color,
  title,
  subTitle,
  image,
  desc,
  rounded,
}) => {
  return <div className="h-full bg-green-300">Gradient layout</div>;
};

export default GradientLayout;
