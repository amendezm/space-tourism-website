import "./DestinationsBar.css";

const DestinationsBar = ({ destinations, activeDestination, handleChange }) => (
  <div className="destinations-bar">
    {destinations.map((name) => (
      <span
        key={name}
        role="button"
        className={`destination-name ${
          name === activeDestination ? "active" : ""
        }`}
        onClick={handleChange(name)}
      >
        {name}
      </span>
    ))}
  </div>
);

export { DestinationsBar };
