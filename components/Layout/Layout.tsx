import React from "react";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gray-400 grid grid-cols-[var(--sidebar-width),_1fr] grid-rows-[1fr,_var(--footer-height)]">
      <aside className="row-span-1 overflow-y-auto bg-black">
        <Sidebar />
      </aside>
      <main className="row-span-1 bg-gray-800">{children}</main>
      <footer className="col-span-2 bg-gray-900">Player</footer>
    </div>
  );
};

export default Layout;
