import React from "react";

const Comet = ({
  left,
  order,
  variant,
}: {
  left: number;
  order: number;
  variant: "blue" | "yellow";
}) => {
  const baseVariants = {
    blue: { from: "#2A314E", to: "#3D4D88" },
    yellow: { from: "#463420", to: "#CC7D1B" },
  };

  const gradient = `linear-gradient(to right, ${baseVariants[variant].from}, ${baseVariants[variant].to})`;

  return (
    <div
      style={{
        top: `${70 * order}px`,
        left: `${left}%`,
        background: gradient,
      }}
      className="absolute w-[109px] h-1 rounded-md -z-1 animate-comet"
    />
  );
};

export default Comet;
