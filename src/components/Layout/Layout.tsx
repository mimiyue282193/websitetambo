import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <Header />
      <main style={{ minHeight: "60vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
