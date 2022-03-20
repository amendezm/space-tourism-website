import "./CrewSlidesDots.css";

const CrewSlidesDots = ({ slidesLength, activeIndex, handleSelection }) => {
  return (
    <div className="dots">
      {[...Array(slidesLength)].map((_, index) => (
        <div
          key={index}
          role="button"
          className={`dot ${activeIndex === index ? "active" : ""}`}
          onClick={handleSelection(index)}
        ></div>
      ))}
    </div>
  );
};

export { CrewSlidesDots };
