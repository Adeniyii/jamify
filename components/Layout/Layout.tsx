import React from "react";
import GradientLayout from "../GradientLayout";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gray-400 grid grid-cols-[var(--sidebar-width),_1fr] grid-rows-[1fr,_var(--footer-height)] overflow-hidden">
      <aside className="row-span-1">
        <Sidebar />
      </aside>
      <main className="row-span-1">
        <GradientLayout
          color=""
          title=""
          subTitle=""
          image=""
          desc=""
          rounded={false}
        >
          {children}
        </GradientLayout>
      </main>
      <footer className="col-span-2 bg-gray-900">Player</footer>
    </div>
  );
};

export default Layout;
