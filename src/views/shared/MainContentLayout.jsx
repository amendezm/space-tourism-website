import "./MainContentLayout.css";

const MainContentLayout = ({ children }) => (
  <div className="main-content">
    {children[0]}
    <div className="left">{children[1]}</div>
    <div className="right">{children[2]}</div>
  </div>
);

export { MainContentLayout };
