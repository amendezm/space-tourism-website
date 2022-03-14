import "./PageTitle.css";

const PageTitle = ({ number, title }) => (
  <div className="title">
    <strong className="number">{number}</strong>
    <span className="text">{title}</span>
  </div>
);

export { PageTitle };
