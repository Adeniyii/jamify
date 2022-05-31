import React from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen text-white [background:_var(--sidebar-bg)] grid grid-cols-[var(--sidebar-width),_1fr] grid-rows-[1fr,_var(--footer-height)] overflow-hidden">
      <aside className="row-span-1 bg-black">
        <Sidebar />
      </aside>
      <main className="row-span-1">{children}</main>
      <footer className="col-span-2 border-neutral-900 border-t px-5">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
