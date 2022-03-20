import { useEffect, useState } from "react";
import { PageTitle } from "../../components/page-title/PageTitle";
import { MainContentLayout } from "./../shared/MainContentLayout";

import douglas from "./../../assets/crew/image-douglas-hurley.png";
import mark from "./../../assets/crew/image-mark-shuttleworth.png";
import victor from "./../../assets/crew/image-victor-glover.png";
import anousheh from "./../../assets/crew/image-anousheh-ansari.png";

import "./Crew.css";

import data from "./../../data.json";
import { CrewSlidesDots } from "./components/CrewSlidesDots";

const { crew } = data;
const photos = [douglas, mark, victor, anousheh];

const CrewView = () => {
  const [index, setIndex] = useState(1);
  const [activeMember, setActiveMember] = useState(crew[index]);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => ++index % crew.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSelection = (index) => () => {
    setIndex(index);
  };

  useEffect(() => {
    setActiveMember(crew[index]);
    setImgUrl(photos[index]);
  }, [index]);

  return (
    <MainContentLayout
      title={<PageTitle number="02" title="Meet your crew" />}
      left={
        <div className="crew-left">
          <div className="role">{activeMember.role}</div>
          <div className="name">{activeMember.name}</div>
          <div className="bio">{activeMember.bio}</div>
          <CrewSlidesDots
            slidesLength={crew.length}
            activeIndex={index}
            handleSelection={handleSelection}
          />
        </div>
      }
      right={
        <div className="crew-right">
          <img src={imgUrl} alt="crew-member" />
        </div>
      }
    />
  );
};

export { CrewView };
