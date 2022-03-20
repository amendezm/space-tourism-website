import { useEffect, useState } from "react";
import { PageTitle } from "../../components/page-title/PageTitle";
import { MainContentLayout } from "../shared/MainContentLayout";
import { DestinationsBar, DestinationDetails } from "./components";

import moonImg from "./../../assets/destination/image-moon.png";
import marsImg from "./../../assets/destination/image-mars.png";
import europaImg from "./../../assets/destination/image-europa.png";
import titanImg from "./../../assets/destination/image-titan.png";

import "./Destination.css";

import data from "./../../data.json";

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
    <MainContentLayout
      title={<PageTitle number="01" title="Pick your destination" />}
      left={
        <div className="destination-photo">
          <img src={imgUrl} alt="destinationImg" />
        </div>
      }
      right={
        <div className="destination-details">
          <DestinationsBar
            destinations={destinations.map(({ name }) => name)}
            activeDestination={destinationName}
            handleChange={handleDestinationChange}
          />
          <DestinationDetails destination={destination} />
        </div>
      }
    />
  );
};

export { DestinationView };
