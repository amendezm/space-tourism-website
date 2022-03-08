import { Routes, Route, HashRouter } from "react-router-dom";
import { HomeView } from "./views/Home";
import { Layout } from "./views/shared/Layout";
import { DestinationView } from "./views/Destination";
import { CrewView } from "./views/Crew";
import { TechnologyView } from "./views/Technology";

import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    const resizeListener = window.addEventListener("resize", handleResize);
    const domLoadedListener = window.addEventListener(
      "DOMContentLoaded",
      handleResize
    );

    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("DOMContentLoaded", domLoadedListener);
    };
  }, []);

  return (
    <div className="App" style={{ height }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="/destination" element={<DestinationView />} />
            <Route path="/crew" element={<CrewView />} />
            <Route path="/technology" element={<TechnologyView />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
