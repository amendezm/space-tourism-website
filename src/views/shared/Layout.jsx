import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";

import "./Layout.css";

const Layout = () => (
  <div className="layout">
    <Navbar />
    <div className="main">
      <Outlet />
    </div>
  </div>
);

export { Layout };
