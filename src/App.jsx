import { Routes, Route, HashRouter } from "react-router-dom";
import { HomeView } from "./views/Home";
import { Layout } from "./views/shared/Layout";
import { DestinationView } from "./views/Destination";
import { CrewView } from "./views/Crew";
import { TechnologyView } from "./views/Technology";

import "./App.css";
import { useWindowDimensions } from "./hooks/window-dimensions";

const App = () => {
  const { height } = useWindowDimensions();

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
