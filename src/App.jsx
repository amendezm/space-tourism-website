import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "./views/Home";
import { Layout } from "./views/shared/Layout";
import { DestinationView } from "./views/Destination";
import { CrewView } from "./views/Crew";
import { TechnologyView } from "./views/Technology";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="/destination" element={<DestinationView />} />
            <Route path="/crew" element={<CrewView />} />
            <Route path="/technology" element={<TechnologyView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
