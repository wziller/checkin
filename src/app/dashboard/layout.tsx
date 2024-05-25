import React, { Children } from "react";
import Navigation from "../components/Navigation";

type Props = {};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;
