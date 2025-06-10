import React from "react";

const HeroButton = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <button className="text-btn-main bg-btn-main/15 border-btn-main-border self-center p-2 border rounded-xs">
      {children}
    </button>
  );
};

export default HeroButton;
