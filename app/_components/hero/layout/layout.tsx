import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <div className="max-w-[1400px] mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
