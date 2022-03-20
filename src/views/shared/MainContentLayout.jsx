import "./MainContentLayout.css";

const MainContentLayout = ({ title, left, right }) => (
  <div className={`main-content ${!title ? "without-title" : ""}`}>
    {title ?? <></>}
    <div className="left">{left}</div>
    <div className="right">{right}</div>
  </div>
);

export { MainContentLayout };
