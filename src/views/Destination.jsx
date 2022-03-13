import { useEffect, useState } from "react";
import "./Destination.css";
import data from "./../data.json";
import moonImg from "./../assets/destination/image-moon.png";
import marsImg from "./../assets/destination/image-mars.png";
import europaImg from "./../assets/destination/image-europa.png";
import titanImg from "./../assets/destination/image-titan.png";
import { DestinationDetails } from "../components/destination/DestinationDetails";

const { destinations } = data;
const photos = {
  Moon: moonImg,
  Europa: europaImg,
  Titan: titanImg,
  Mars: marsImg,
};

const DestinationView = () => {
  const [destinationName, setDestinationName] = useState("Moon");
  const [destination, setDestination] = useState({});
  const [imgUrl, setImgUrl] = useState("");

  const handleDestinationChange = (name) => () => {
    setDestinationName(name);
  };

  useEffect(() => {
    setImgUrl(photos[destinationName]);
    setDestination(
      destinations.find((destination) => destination.name === destinationName)
    );
  }, [destinationName]);

  return (
    <div className="destination-page">
      <div className="title">
        <strong className="number">01</strong>
        <span className="text">Pick your destination</span>
      </div>
      <div className="destination-photo">
        <img src={imgUrl} alt="destinationImg" />
      </div>
      <div className="destination-details">
        <div className="destinations-bar">
          {destinations.map(({ name }) => (
            <span
              key={name}
              role="button"
              className={`destination-name ${
                name === destinationName ? "active" : ""
              }`}
              onClick={handleDestinationChange(name)}
            >
              {name}
            </span>
          ))}
        </div>
        <DestinationDetails destination={destination} />
      </div>
    </div>
  );
};

export { DestinationView };
