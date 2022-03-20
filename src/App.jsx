import { Routes, Route, HashRouter } from "react-router-dom";
import { HomeView } from "./views/home/Home";
import { Layout } from "./views/shared/Layout";
import { DestinationView } from "./views/destination/Destination";
import { CrewView } from "./views/crew/Crew";
import { TechnologyView } from "./views/technology/Technology";

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
