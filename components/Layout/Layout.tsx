import React from "react";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen text-white [background:_var(--sidebar-bg)] grid grid-cols-[var(--sidebar-width),_1fr] grid-rows-[1fr,_var(--footer-height)] overflow-hidden">
      <aside className="row-span-1 bg-black">
        <Sidebar />
      </aside>
      <main className="row-span-1 overflow-y-auto">{children}</main>
      <footer className="col-span-2 border-neutral-900 border-t"> </footer>
    </div>
  );
};

export default Layout;
