import { useEffect, useState } from "react";
import "./Destination.css";
import data from "./../data.json";
import moonImg from "./../assets/destination/image-moon.png";
import marsImg from "./../assets/destination/image-mars.png";
import europaImg from "./../assets/destination/image-europa.png";
import titanImg from "./../assets/destination/image-titan.png";
import { DestinationDetails } from "../components/destination/DestinationDetails";
import { PageTitle } from "../components/page-title/PageTitle";
import { MainContentLayout } from "./shared/MainContentLayout";
import { DestinationsBar } from "../components/destination/DestinationsBar";

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
    <MainContentLayout>
      <PageTitle number="01" title="Pick your destination" />
      <div className="destination-photo">
        <img src={imgUrl} alt="destinationImg" />
      </div>
      <div className="destination-details">
        <DestinationsBar
          destinations={destinations.map(({ name }) => name)}
          activeDestination={destinationName}
          handleChange={handleDestinationChange}
        />
        <DestinationDetails destination={destination} />
      </div>
    </MainContentLayout>
  );
};

export { DestinationView };
