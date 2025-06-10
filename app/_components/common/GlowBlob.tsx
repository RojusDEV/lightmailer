import React from "react";

type Color = "purple" | "cyan" | "blue";

type Size = "small" | "large";

const GlowBlob = ({
  color,
  size,
  left = "138px",
  top = "114px",
}: {
  color: Color;
  size: Size;
  left?: string;
  top?: string;
}) => {
  const gradientMap: Record<Color, string> = {
    purple: "bg-[radial-gradient(circle,_#6F89EE_10%,_transparent_70%)]",
    cyan: "bg-[radial-gradient(circle,_#1E6D88_50%,_transparent_80%)]",
    blue: "bg-[radial-gradient(circle,_#3B82F6_0%,_transparent_70%)]",
  };

  const sizesMap: Record<Size, string> = {
    small: "h-[142px] w-[142px]",
    large: "h-[290px] w-[290px] ",
  };

  return (
    <div
      style={{
        top: top,
        left: left,
      }}
      className={`absolute ${sizesMap[size]} rounded-full blur-[100px] opacity-50 ${gradientMap[color]}`}
    />
  );
};

export default GlowBlob;
