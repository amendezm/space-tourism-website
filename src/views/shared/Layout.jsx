import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";

import "./Layout.css";

const Layout = () => {
  const { pathname } = useLocation();
  const [backgroundClass, setBackgroundClass] = useState("");

  useEffect(() => {
    setBackgroundClass(() => {
      const withoutSlash = pathname.substring(1) || "home";
      return `${withoutSlash}-background`;
    });
  }, [pathname]);

  return (
    <div className={`layout ${backgroundClass}`}>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
