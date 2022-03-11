import "./DestinationDetails.css";

const DestinationDetails = ({
  destination: { name, description, distance, travel },
}) => (
  <div className="content">
    <div className="name">{name}</div>
    <div className="description">{description}</div>
    <div className="bottom">
      <div className="distance">
        <p className="label">Avg. Distance</p>
        <p className="value">{distance}</p>
      </div>
      <div className="travel">
        <p className="label">Est. Travel Time</p>
        <p className="value">{travel}</p>
      </div>
    </div>
  </div>
);

export { DestinationDetails };
