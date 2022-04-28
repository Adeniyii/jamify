import React from "react";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gray-400 grid grid-cols-[var(--sidebar-width),_1fr] grid-rows-[1fr,_var(--footer-height)]">
      <aside className="row-span-1">
        <Sidebar />
      </aside>
      <main className="row-span-1 bg-red-400">{children}</main>
      <footer className="col-span-2 bg-yellow-700">Player</footer>
    </div>
  );
};

export default Layout;
