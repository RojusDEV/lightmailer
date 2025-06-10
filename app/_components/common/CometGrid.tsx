"use client";
import React, { useEffect, useState } from "react";
import Comet from "./Comet";

type VariantType = "blue" | "yellow";

type CometData = {
  left: number;
  order: number;
  variant: VariantType;
  id: number;
};

const baseVariants: VariantType[] = ["blue", "yellow"];

const getRandomComet = (base: VariantType, index: number): CometData => ({
  variant: base,
  order: Math.floor(Math.random() * 15 + 1.5),
  left: Math.floor(Math.random() * 50),
  id: index,
});

function CometGrid() {
  const [comets, setComets] = useState<CometData[]>([
    getRandomComet(baseVariants[0], 0),
    getRandomComet(baseVariants[1], 1),
    getRandomComet(baseVariants[1], 2),
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setComets([
        getRandomComet(baseVariants[0], 0),
        getRandomComet(baseVariants[1], 1),
        getRandomComet(baseVariants[1], 2),
      ]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {comets.map((comet) => (
        <Comet
          key={comet.id}
          left={comet.left}
          order={comet.order}
          variant={comet.variant}
        />
      ))}
    </div>
  );
}

export default CometGrid;
